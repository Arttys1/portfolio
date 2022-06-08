class PersonnalSorter implements ProjectSorter
{
    public sort(projects: Project[]): Project[] {
        let sortedProjects: Project[] = [];

        projects.forEach(project => {
            if (project.Type == ProjectType.PERSONNAL) {
                sortedProjects.push(project);
            }
        });

        return sortedProjects;
    }
}