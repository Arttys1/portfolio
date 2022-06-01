class Project
{
    private name : string;
    private description : string;
    private year : number;
    private type : ProjectType;
    private link : string;
    private imagePath : string;
    private keywords : string;

    public constructor(name : string, type : ProjectType)
    {
        this.name = name;
        this.type = type;
        this.year = 0;
        this.description = "";
        this.link = "";
        this.imagePath = "";
        this.keywords = "";
    }

    clone(): Project {
        let project : Project = new Project(this.name, this.type);
        project.year = this.year;
        project.description = this.description;
        project.link = this.link;
        project.imagePath = this.imagePath;
        project.keywords = this.keywords;
        return project;
    }

    public putHTML() : HTMLDivElement {
        let div = document.createElement("div");
        div.classList.add("project");
        div.classList.add("row");

        let img = document.createElement("img");
        img.classList.add("col");
        img.classList.add("imgProjet");
        img.src = this.imagePath;
        img.alt = "project illustration";
        div.appendChild(img);

        let col = document.createElement("div");
        col.classList.add("col");
        
        let h2 = document.createElement("h2");
        h2.innerHTML = this.name;
        col.appendChild(h2);

        let desc = document.createElement("p");
        desc.classList.add("description");
        desc.innerHTML = this.description;
        col.appendChild(desc);

        let keyword = document.createElement("p");
        keyword.classList.add("keyword");
        keyword.innerHTML = this.keywords;
        col.appendChild(keyword);

        let githubLink = document.createElement("a");
        let github = document.createElement("img");
        github.src = "image/github.png";
        github.alt = "github icon";
        github.classList.add("iconGithub");
        githubLink.appendChild(github);
        githubLink.href = this.link;
        col.appendChild(githubLink);

        let year = document.createElement("p");
        year.classList.add("projectDate");

        let typeString = this.type.toString();
        year.innerHTML = this.year.toString() + " · " + typeString;
        col.appendChild(year);

        div.appendChild(col);
        return div;
    }

    //#region Properties

    set Year(year : number){
        this.year = year;
    }
    
    set Description(description : string)
    {
        this.description = description;
    }

    set Link(link : string){
        this.link = link;
    }

    set ImagePath(imagePath : string){

        this.imagePath = imagePath;
    }

    set Name(name : string){
        this.name = name;
    }

    set Type(type : ProjectType){
        this.type = type;
    }

    set Keywords(keywords : string){
        this.keywords = keywords;
    }

    get Year(){
        return this.year;
    }

    get Name() : string{

        return this.name;
    }

    get Description() : string
    {
        return this.description;
    }

    get Type() : ProjectType
    {
        return this.type;
    }

    get Link() : string
    {
        return this.link;
    }

    get ImagePath() : string
    {
        return this.imagePath;
    }

    get Keywords() : string
    {
        return this.keywords;
    }

    //#endregion Properties
}

enum ProjectType{
    SCHOOL = "School Project",
    PERSONNAL = "Personnal Project",
    PROFESSIONAL = "Professional Project",
}