const projectContainer : string = 'projectContainer';

class ProjectVue
{
    private projects : Projects;    
    private lastSorter: SorterType;
    private showMore : boolean;

    constructor()
    {
        this.projects = new Projects();
        this.lastSorter = SorterType.DEFAULT;
        this.showMore = true;
        this.fillProjects();
        this.displaySome(SorterType.DEFAULT, 4);
        
    }

    //function to fill the projects array
    private fillProjects()
    {
        let robot = new Project("AgroSup Robots", ProjectType.PROFESSIONAL);
        robot.Description = "During a 3 months intership, I worked on the conception and the implementation on a robotic platform for an Engineering Agronomic School."
        + "The robots was thinked to work together to accomplish complex tasks, so the communication was an important part of the project."
        + "I built a library to handle low level programming and to allow engineers to easily build strategies with the swarm.";

        robot.ImagePath = "image/robot.jpg";
        robot.Keywords = "C++, Arduino, Swarm, Low Level Programming, Communication";
        robot.Year = 2022;
        this.projects.add(robot);

        ///////////////////////////////////////////////////////////////

        let maze = new Project("MazeSolver", ProjectType.PERSONNAL);
        maze.Description = "The program generate a maze automatically with the choice of several algorithms. Then it find the shortest path thanks to pathfinding algorithm like Dijkstra or BreadFirst."
        + "The program is written in C# and use the WPF framework to display the HMI.";

        maze.ImagePath = "image/MazeSolver.png";
        maze.Keywords = "C#, WPF, Pathfinding, Algorithms";
        maze.Link = "https://www.github.com/Arttys1/MazeSolver";
        maze.Year = 2021;
        this.projects.add(maze);

        ///////////////////////////////////////////////////////////////

        let alice = new Project("The Binding of Alice", ProjectType.SCHOOL);
        alice.Description = "It's a group project of 5 where I was the project manager. The goal was to product a copycat of the game " + '"The Binding of Isaac"' + " in the universe of " + '"Alice Madness return"' + "."
        + "The game include ennemis, projectiles, destructibles, severals room and many others things. "
        + "We only use Java and Java fx so we had to build our custom game engine to manage loop game, collision, objects creation...<br/>"
        + "This project taught me a lot about the role of project manager.";

        alice.ImagePath = "image/TheBindingOfAlice.PNG";
        alice.Keywords = "Java, JavaFx, Game Engine, Game Design";
        alice.Link = "https://github.com/Arttys1/Clone-d-Isaac";
        alice.Year = 2021;
        this.projects.add(alice);

        ///////////////////////////////////////////////////////////////

        let automaton = new Project("Cellular Automaton Simulator", ProjectType.SCHOOL);
        automaton.Description = "This is a school project. It's a cellular automaton simulator who can manage severals types of automaton.";
        
        automaton.ImagePath = "image/CellularAutomaton.PNG";
        automaton.Keywords = "Javascript, Cellular Automaton, HTML/CSS";
        automaton.Link = "https://github.com/Arttys1/Cellular-Automaton";
        automaton.Year = 2022;
        this.projects.add(automaton);

        ///////////////////////////////////////////////////////////////

        let connect4 = new Project("Connect 4", ProjectType.PERSONNAL);
        connect4.Description = "This is my first personnal project. It's a Connect 4."
        + "The game is written in C# and use the WPF framework to display the HMI.";
        
        connect4.ImagePath = "image/connect4.PNG";
        connect4.Keywords = "C#, WPF, Connect 4";
        connect4.Link = "https://github.com/Arttys1/Puissance4";
        connect4.Year = 2020;
        this.projects.add(connect4);

        ///////////////////////////////////////////////////////////////

        let portfolio = new Project("Portfolio", ProjectType.PERSONNAL);
        portfolio.Description = "This is my online portfolio. "
        + "This web site is build with only native html/css and ts. "
        + "You are currently on it :D.";
        
        portfolio.ImagePath = "image/portfolio.PNG";
        portfolio.Keywords = "HTML/CSS, Typescript, Web Design, Portfolio";
        portfolio.Link = "https://github.com/Arttys1/portfolio";
        portfolio.Year = 2022;
        this.projects.add(portfolio);

        ///////////////////////////////////////////////////////////////

        let libGraphic = new Project("LibGraphic", ProjectType.PERSONNAL);
        libGraphic.Description = "This is a little 3D graphic library. "
        + "It's a personal project where i can learn openGL."
        + "It's written in C++ and use GLFW and GLEW libraries to manipulate OpenGL."
        + "I loved writing this library because i learned a lot about graphics programming.";

        libGraphic.ImagePath = "image/libGraphic.PNG";
        libGraphic.Keywords = "C++, library, OpenGL, GLFW, GLEW";
        libGraphic.Link = "https://www.github.com/Arttys1/LibGraphic";
        libGraphic.Year = 2022;
        this.projects.add(libGraphic);
        
    }

    public display(typeSorter : SorterType) : void{
        this.lastSorter = typeSorter;
        this.clearScreen();
        this.sort(typeSorter).putHTML(document.getElementById(projectContainer) as HTMLElement);
    }

    public displaySome(typeSorter : SorterType, number : number) : void{
        this.lastSorter = typeSorter;
        this.clearScreen();
        this.sort(typeSorter).putHTMLSome(document.getElementById(projectContainer) as HTMLElement, number);
    }
    
    public clearScreen() : void
    {
        let section = document.getElementById(projectContainer);
        if(section != null)
            section.innerHTML = "";
    }

    public buttonActive(button : HTMLElement) : void
    {
        let buttons : HTMLCollectionOf<Element> = document.getElementsByClassName("projectButton");

        for(let i = 0; i < buttons.length; i++)
        {
            buttons[i].classList.remove("active");
            buttons[i].classList.add("unactive");
        }

        button.classList.add("active");
        button.classList.remove("unactive");
    }
    
    private sort(typeSorter : SorterType) : Projects
    {
        let sorted : Projects = this.projects.clone();
        switch(typeSorter)
        {
            case SorterType.DEFAULT: break;
            case SorterType.DATE: sorted.sort(new DateSorter()); break;
            case SorterType.PERSONNAL: sorted.sort(new PersonnalSorter()); break;
            case SorterType.PROFESSIONAL: sorted.sort(new ProfessionelSorter()); break;
            case SorterType.SCHOOL: sorted.sort(new SchoolSorter()); break;
            default: 
                throw new Error("Unknown type of sorter");
        }
    
        return sorted;
    }

    public get LastSorter(): SorterType {
        return this.lastSorter;
    } 
}