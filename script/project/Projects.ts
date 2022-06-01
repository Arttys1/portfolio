class Projects
{
    private projects : Project[];

    public constructor()
    {
        this.projects = [];
    }

    public add(project : Project)
    {
        this.projects.push(project);
    }

    public get(index : number) : Project
    {
        return this.projects[index];
    }

    get length() : number
    {
        return this.projects.length;
    }

    get list() : Project[]
    {
        return this.projects;
    }

    public putHTML(element : HTMLElement) : void
    {
        let posY : number = window.scrollY;
        for(let i : number = 0; i < this.projects.length; i++)
        {
            let div : HTMLDivElement = this.projects[i].putHTML();
            element.appendChild(div);

            //if it's the first or we can see it, we animate it
            if(posY > div.getBoundingClientRect().top)
            {
                div.style.transform = "translateY(10%)";
            }
        }
    }

    public sort(sorter : ProjectSorter) : void
    {
        this.projects = sorter.sort(this.projects);
    }

    public clone() : Projects
    {
        let projects : Projects = new Projects();
        this.projects.forEach(project => {
            projects.add(project.clone());
        });
        return projects;
    }
}