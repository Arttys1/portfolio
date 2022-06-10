/**
 * Class who manage the event when the user scroll
 */
class ScrollChecker
{
    private lastScrollTop : number = 0;
    
    constructor()
    {        
        window.addEventListener("scroll", this.scrollChecker);
        window.addEventListener("touchmove", this.scrollChecker);
    }
    
    private scrollChecker()
    {
        let Ypos : number = window.scrollY;

        //scale the picture when the user see the picture
        let author = document.getElementById("author") as HTMLElement; 
        if(Ypos > author.getBoundingClientRect().top)
        {
            author.style.transform = "scale(1)";
        }

        //manage project animation when user scroll down
        let projects : HTMLCollectionOf<Element> = document.getElementsByClassName("project");
        for(let i = 0; i < projects.length; i++)
        {
            let project : HTMLElement = projects[i] as HTMLElement;
            if(Ypos > project.getBoundingClientRect().top)
            {
                project.style.transform = "translateY(0%)";
            }
        }

        //navbar mecanics
        let nav : HTMLElement = document.getElementById("navigationBar") as HTMLElement;
        if(Ypos == 0) {
            nav.style.position = "relative";
            nav.style.backgroundColor = "transparent";
        }
        else if (Ypos < this.lastScrollTop)
        {
            nav.style.position = "fixed";
            nav.classList.add("Navactive");
            nav.classList.remove("Navunactive");
            nav.style.backgroundColor = "#082131";
        } 
        else if(Ypos > this.lastScrollTop)
        {
            nav.style.position = "fixed";
            nav.classList.remove("Navactive");
            nav.classList.add("Navunactive");
            nav.style.backgroundColor = "#082131";
        }

        this.lastScrollTop = Ypos <= 0 ? 0 : Ypos; // for negative scrolling
    }
}