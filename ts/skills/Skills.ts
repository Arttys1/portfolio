class Skills
{
    private skills : Skill[];
    constructor()
    {
        this.skills = [];
    }

    public clone() : Skills
    {
        let clone : Skills = new Skills();
        this.skills.forEach(skill => clone.add(skill));
        return clone;
    }

    public sort(SkillSorter : SkillSorter) : void
    {
        this.skills = SkillSorter.sort(this.skills);
    }
    
    public putHTML(element : HTMLElement) : void
    {
        this.skills.forEach(skill => {
            element.appendChild(skill.putHTML());
        });
    }

    public add(skill : Skill)
    {
        this.skills.push(skill);
    }

    public get(index : number) : Skill
    {
        return this.skills[index];
    }

    get length() : number
    {
        return this.skills.length;
    }
}