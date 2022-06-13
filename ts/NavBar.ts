class NavBar
{
    private navBar : HTMLUListElement;
    private open : boolean;
    private lastScrollTop : number;
    constructor()
    {
        this.navBar = document.getElementById("navBar") as HTMLUListElement;
        this.open = false;
        this.lastScrollTop = 0;   

        let width : number = document.getElementById("body")?.clientWidth as number;
        if(width <= 600)
        {
            let icon : HTMLElement | null = document.getElementById("navBarIcon");
            icon?.addEventListener("click", () => {
                this.openCloseNavBar();
            });
            icon?.addEventListener("touch", () => {
                this.openCloseNavBar();
            });

            for(let i : number= 0; i < this.navBar.children.length; i++)
            {
                this.navBar.children[i]?.children[0]?.addEventListener("click", () => {
                    this.closeNavBar();
                });
            }
        }

        window.addEventListener("scroll", ()=>{this.navBarMecanics()});
        window.addEventListener("touchmove", ()=>{this.navBarMecanics()});
        
    }    

    private navBarMecanics()
    {
        let Ypos : number = window.scrollY;
        
        //navbar mecanics
        let nav : HTMLElement = document.getElementById("navigationBar") as HTMLElement;
        if(Ypos == 0) { //case where we are at the top of the page
            nav.style.position = "relative";
            nav.style.backgroundColor = "transparent";
        }
        else if (Ypos < this.lastScrollTop) //case where we are scrolling up
        {
            nav.style.position = "fixed";
            nav.classList.add("Navactive");
            nav.classList.remove("Navunactive");
            nav.style.backgroundColor = "#082131";
        } 
        else if(Ypos >= this.lastScrollTop)  //case where we are scrolling down
        {
            nav.style.position = "fixed";
            nav.classList.remove("Navactive");
            nav.classList.add("Navunactive");
            nav.style.backgroundColor = "#082131";
            
            if(window.innerWidth <= 600)
            {
                this.closeNavBar();
            }
        }

        this.lastScrollTop = Ypos <= 0 ? 0 : Ypos; // for negative scrolling
    }

    private openCloseNavBar() : void
    {
        if(!this.open)
        {
            this.openNavBar();
        }
        else
        {
            this.closeNavBar();
        }
        this.open = !this.open;
    }

    private closeNavBar() : void
    {
        for(let i : number= 1; i < this.navBar.children.length; i++)
        {
            let li : HTMLElement = this.navBar.children[i] as HTMLElement;
            li.style.display="none";
        }
    }

    private openNavBar() : void
    {
        for(let i : number= 0; i < this.navBar.children.length; i++)
        {
            let li : HTMLElement = this.navBar.children[i] as HTMLElement;
            li.style.display="block";
        }
    }
}