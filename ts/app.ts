const cursor : Cursor = new Cursor();
const projectVue : ProjectVue = new ProjectVue();
const skillVue : SkillVue = new SkillVue();
const canvas : Canvas = new Canvas("particleContainer");
const scrollChecker : ScrollChecker = new ScrollChecker();
var timerCanvasID : number;
var timerGenerateParticles : number;

//entry point of the application
function main() : void {

    //add event on the button to sort the project list
    document.getElementById("defaultSort")?.addEventListener("click", function () {
        projectVue.displaySome(SorterType.DEFAULT, 4);
        projectVue.buttonActive(this);
    });
    document.getElementById("DateSort")?.addEventListener("click", function () {
        projectVue.displaySome(SorterType.DATE, 4);
        projectVue.buttonActive(this);
    });
    document.getElementById("PersonnalSort")?.addEventListener("click", function () {
        projectVue.displaySome(SorterType.PERSONNAL, 4);
        projectVue.buttonActive(this);
    });

    document.getElementById("ProfessionalSort")?.addEventListener("click", function () {
        projectVue.displaySome(SorterType.PROFESSIONAL, 4);
        projectVue.buttonActive(this);
    });

    document.getElementById("SchoolSort")?.addEventListener("click", function () {
        projectVue.displaySome(SorterType.SCHOOL, 4);
        projectVue.buttonActive(this);
    });

    document.getElementById("showMore")?.addEventListener("click", function (){
        projectVue.display(projectVue.LastSorter);
    });

    //add event to sort skills
    document.getElementById("button_default")?.addEventListener("click", function() {
        skillVue.display(SkillType.DEFAULT);
        skillVue.activeButton(this);
    });

    document.getElementById("button_software")?.addEventListener("click", function() {
        skillVue.display(SkillType.SOFTWARE_DEVELOPMENT);
        skillVue.activeButton(this);
    });

    document.getElementById("button_db")?.addEventListener("click", function() {
        skillVue.display(SkillType.DATABASE);
        skillVue.activeButton(this);
    });

    document.getElementById("button_web")?.addEventListener("click", function() {
        skillVue.display(SkillType.WEB_DEVELOPMENT);
        skillVue.activeButton(this);
    });

    displayTextHome();

    canvas.generateParticles(10);
    //add event to update the canvas
    timerCanvasID = window.setInterval(() => {
        canvas.update();
        canvas.draw();
    }, 33); //33ms = 30fps

    //add event to generate particles
    timerGenerateParticles = window.setInterval(() => {
        canvas.generateParticles(10);
    }, 5000);
}

function displayTextHome() : void {

    setTimeout(()=>{
        let p = document.getElementById("hi") as HTMLElement;
        p.style.opacity = "1";
    }, 1000);

    setTimeout(()=>{
        let p = document.getElementById("iam") as HTMLElement;
        p.style.opacity = "1";
    }, 1500);

    setTimeout(()=>{
        let p = document.getElementById("getStarted") as HTMLElement;
        p.style.opacity = "1";
    }, 2000);
}



window.addEventListener("load", main);