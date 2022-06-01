const projectContainer : string = 'projectContainer';

class ProjectVue
{
    private projects : Projects;    

    constructor()
    {
        this.projects = new Projects();
        this.fillProjects();
        this.display(SorterType.DEFAULT);
    }

    //asyncrone function to fill the projects array
    private async fillProjects() : Promise<void>
    {
        let robot = new Project("AgroSup Robots", ProjectType.PROFESSIONAL);
        robot.Description = "During a 3 months intership, I worked on the conception and the implementation on a robotic platform for an Engineering Agronomic School."
        + "The robots was thinked to work together to accomplish complex tasks, so the communication was an important part of the project."
        + "I built a library to handle low level programming and to allow engineers to easily build strategies with the swarm.";

        robot.ImagePath = "image/robot.jpg";
        robot.Keywords = "C++, Arduino, Swarm, Low Level Programming, Communication";
        robot.Link = "https://www.github.com";
        robot.Year = 2022;
        this.projects.add(robot);

        ///////////////////////////////////////////////////////////////

        let maze = new Project("MazeSolver", ProjectType.PERSONNAL);
        maze.Description = "The program generate a maze automatically with the choice of several algorithms. Then it find the shortest path thanks to pathfinding algorithm like Dijkstra or BreadFirst."
        + "The program is written in C# and use the WPF framework to display the HMI.";

        maze.ImagePath = "image/MazeSolver.png";
        maze.Keywords = "C#, WPF, Pathfinding, Algorithms";
        maze.Link = "https://www.github.com";
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
        alice.Link = "https://www.github.com";
        alice.Year = 2021;
        this.projects.add(alice);

        ///////////////////////////////////////////////////////////////

        let automaton = new Project("Cellular Automaton Simulator", ProjectType.SCHOOL);
        automaton.Description = "This is a school project. It's a cellular automaton simulator who can manage severals types of automaton.";
        
        automaton.ImagePath = "image/CellularAutomaton.PNG";
        automaton.Keywords = "Javascript, Cellular Automaton, HTML/CSS";
        automaton.Link = "https://www.github.com";
        automaton.Year = 2022;
        this.projects.add(automaton);

        
    }

    public display(typeSorter : SorterType) : void{
        this.clearScreen();
        this.sort(typeSorter).putHTML(document.getElementById(projectContainer) as HTMLElement);
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
    

}