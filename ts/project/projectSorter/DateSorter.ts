class DateSorter implements ProjectSorter
{
    public sort(projects: Project[]): Project[] {
        let sortedProjects: Project[] = [];

        projects.forEach(project => {
            sortedProjects.push(project);
        });

        sortedProjects.sort((a, b) => {
            if (a.Year < b.Year) {
                return 1;
            }
            if (a.Year > b.Year) {
                return -1;
            }
            return 0;
        });

        return sortedProjects;
    }
    
}