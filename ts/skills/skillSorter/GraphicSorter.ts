class GraphicSorter implements SkillSorter {
    sort(skills: Skill[]): Skill[] {
        let sortedSkills: Skill[] = [];
        skills.forEach(skill => {
            if (skill.Type == SkillType.COMPUTER_GRAPHIC) {
                sortedSkills.push(skill);
            }
        });
        return sortedSkills;
    }
}