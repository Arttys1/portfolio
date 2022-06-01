class SchoolSorter implements ProjectSorter {

    public sort(projects: Project[]): Project[] {
        let sortedProjects: Project[] = [];

        projects.forEach(project => {
            if (project.Type == ProjectType.SCHOOL) {
                sortedProjects.push(project);
            }
        });

        //sort by date
        let dateSorter : DateSorter = new DateSorter();
        return dateSorter.sort(sortedProjects);
    }

  
}