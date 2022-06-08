class DBSorter implements SkillSorter
{
    sort(skills: Skill[]): Skill[] {
        let sortedSkills: Skill[] = [];
        skills.forEach(skill => {
            if (skill.Type == SkillType.DATABASE) {
                sortedSkills.push(skill);
            }
        });
        return sortedSkills;
    }
    
}