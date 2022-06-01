/**
 * Class who implement SkillSorter interface.
 * return a new list whith only Software skills.
 */
class SoftwareSorter implements SkillSorter
{
    sort(skills: Skill[]): Skill[] {
        let sortedSkills: Skill[] = [];
        skills.forEach(skill => {
            if (skill.Type == SkillType.SOFTWARE_DEVELOPMENT) {
                sortedSkills.push(skill);
            }
        });
        return sortedSkills;
    }
    
}