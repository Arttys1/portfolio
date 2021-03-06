const cursor : Cursor = new Cursor();
const projectVue : ProjectVue = new ProjectVue();
const skillVue : SkillVue = new SkillVue();
const canvas : Canvas = new Canvas("particleContainer");
const scrollChecker : ScrollChecker = new ScrollChecker();
const navBar : NavBar = new NavBar();

//entry point of the application
function main() : void {

    displayTextHome();

    canvas.generateParticles(10);
    //add event to update the canvas
    window.setInterval(() => {
        canvas.update();
        canvas.draw();
    }, 33); //33ms = 30fps

    //add event to generate particles
    window.setInterval(() => {
        canvas.generateParticles(10);
    }, 5000);
}

function displayTextHome() : void {

    setTimeout(()=>{
        let p = document.getElementById("hi") as HTMLElement;
        p.style.opacity = "1";
    }, 500);

    setTimeout(()=>{
        let p = document.getElementById("iam") as HTMLElement;
        p.style.opacity = "1";
    }, 1000);

    setTimeout(()=>{
        let p = document.getElementById("getStarted") as HTMLElement;
        p.style.opacity = "1";
    }, 1500);
}

window.addEventListener("load", main);