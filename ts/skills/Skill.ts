class Skill
{
    private name : string;
    private type : SkillType;
    private iconPath : string;

    public constructor(name : string, type : SkillType, iconPath : string)
    {
        this.name = name;
        this.type = type;
        this.iconPath = iconPath;
    }

    public putHTML() : HTMLDivElement
    {
        let skill = document.createElement('div');
        skill.classList.add('skill');

        let icon = document.createElement('img');
        icon.src = this.iconPath;
        icon.alt = "skill illustration";
        skill.appendChild(icon);

        let skillName = document.createElement('p');
        skillName.innerHTML = this.name;
        skill.appendChild(skillName);

        return skill;
    }

//#region Properties

    get Name() : string
    {
        return this.name;
    }

    get Type() : SkillType
    {
        return this.type;
    }

    get IconPath() : string
    {
        return this.iconPath;
    }

    set Name(name : string)
    {
        this.name = name;
    }

    set Type(type : SkillType)
    {
        this.type = type;
    }

    set IconPath(iconPath : string)
    {
        this.iconPath = iconPath;
    }

//#endregion Properties
}

enum SkillType
{
    SOFTWARE_DEVELOPMENT = "Software Development",
    WEB_DEVELOPMENT = "Web Development",
    DATABASE = "Database",
    COMPUTER_GRAPHIC = "Computer Graphic",

    DEFAULT = "Default",
}