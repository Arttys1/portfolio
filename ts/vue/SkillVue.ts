const skillsContainer : string = 'skillsContainer';

class SkillVue
{
    private skills : Skills;

    constructor()
    {
        this.skills = new Skills();
        this.fillSkills();
        this.display(SkillType.DEFAULT);
        
        //add event to sort skills
        window.addEventListener("load", () => {         
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
        });
    }

    display(skillType : SkillType) : void
    {
        this.clear();
        let sortedSkills : Skills =  this.sort(skillType);
        sortedSkills.putHTML(document.getElementById(skillsContainer) as HTMLElement);
    }

    private sort(skillType : SkillType) : Skills
    {
        let sortedSkills : Skills = this.skills.clone();
        switch(skillType)
        {
            case SkillType.SOFTWARE_DEVELOPMENT: sortedSkills.sort(new SoftwareSorter()); break;
            case SkillType.DATABASE: sortedSkills.sort(new DBSorter()); break;
            case SkillType.WEB_DEVELOPMENT: sortedSkills.sort(new WebSorter()); break; 
            case SkillType.DEFAULT:  break;
            default: 
                throw new Error("Unknown skill type");
        }

        return sortedSkills;
    }

    public activeButton(button : HTMLElement) : void {
        let buttons : HTMLCollectionOf<Element> = document.getElementsByClassName("skillButton");
        for(let i : number = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
            buttons[i].classList.add("unactive");
            let parent : HTMLElement = buttons[i].parentElement as HTMLElement;
            parent.classList.remove("active");
    
        }
        button.classList.remove("unactive");
        button.classList.add("active");
    
        let parent : HTMLElement = button.parentElement as HTMLElement;
        parent.classList.add("active");
    }
    

    private clear(): void
    {
        let container : HTMLElement | null = document.getElementById(skillsContainer);
        if(container != null)
            container.innerHTML = "";
    }

    private async fillSkills() : Promise<void>
    {
        let java : Skill = new Skill("Java", SkillType.SOFTWARE_DEVELOPMENT, "image/skills/java.png");
        this.skills.add(java);

        let csharp = new Skill("C#", SkillType.SOFTWARE_DEVELOPMENT, "image/skills/csharp.png");
        this.skills.add(csharp);

        let cpp : Skill = new Skill("C++", SkillType.SOFTWARE_DEVELOPMENT, "image/skills/cpp.png");
        this.skills.add(cpp);

        let css : Skill = new Skill("CSS", SkillType.WEB_DEVELOPMENT, "image/skills/css.png");
        this.skills.add(css);

        let html : Skill = new Skill("HTML", SkillType.WEB_DEVELOPMENT, "image/skills/html.png");
        this.skills.add(html);

        let js : Skill = new Skill("JavaScript", SkillType.WEB_DEVELOPMENT, "image/skills/javascript.svg");
        this.skills.add(js);

        let ts : Skill = new Skill("TypeScript", SkillType.WEB_DEVELOPMENT, "image/skills/typescript.svg");
        this.skills.add(ts);

        let sql : Skill = new Skill("SQL", SkillType.DATABASE, "image/skills/sql.png");
        this.skills.add(sql);

        let mysql : Skill = new Skill("PLSQL", SkillType.DATABASE, "image/skills/plsql.png");
        this.skills.add(mysql);

        let NOSQL : Skill = new Skill("NoSQL", SkillType.DATABASE, "image/skills/nosql.png");
        this.skills.add(NOSQL);
    }

}