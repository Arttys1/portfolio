class ProfessionelSorter implements ProjectSorter
{
    public sort(projects: Project[]): Project[] {
        let sortedProjects: Project[] = [];

        projects.forEach(project => {
            if (project.Type == ProjectType.PROFESSIONAL) {
                sortedProjects.push(project);
            }
        });

        return sortedProjects;
    }
}