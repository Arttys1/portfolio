const cursor : Cursor = new Cursor();
const projectVue : ProjectVue = new ProjectVue();
const skillVue : SkillVue = new SkillVue();
const canvas : Canvas = new Canvas("particleContainer");
const scrollChecker : ScrollChecker = new ScrollChecker();
var timerCanvasID : number;
var timerGenerateParticles : number;

//entry point of the application
function main() : void {

    document.getElementById("getStarted")?.addEventListener("click", ()=>{
        console.log("mooove");
        window.moveTo(0, 2000);
    });

    //add event on the button to sort the project list
    document.getElementById("defaultSort")?.addEventListener("click", function () {
        projectVue.display(SorterType.DEFAULT);
        projectVue.buttonActive(this);
    });
    document.getElementById("DateSort")?.addEventListener("click", function () {
        projectVue.display(SorterType.DATE);
        projectVue.buttonActive(this);
    });
    document.getElementById("PersonnalSort")?.addEventListener("click", function () {
        projectVue.display(SorterType.PERSONNAL);
        projectVue.buttonActive(this);
    });

    document.getElementById("ProfessionalSort")?.addEventListener("click", function () {
        projectVue.display(SorterType.PROFESSIONAL);
        projectVue.buttonActive(this);
    });

    document.getElementById("SchoolSort")?.addEventListener("click", function () {
        projectVue.display(SorterType.SCHOOL);
        projectVue.buttonActive(this);
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