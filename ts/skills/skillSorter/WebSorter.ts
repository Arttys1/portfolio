class WebSorter implements SkillSorter
{
    sort(skills: Skill[]): Skill[]
    {
        let sortedSkills : Skill[] = [];
        skills.forEach(skill => {
            if(skill.Type == SkillType.WEB_DEVELOPMENT)
                sortedSkills.push(skill);
        });
        return sortedSkills;
    }
}