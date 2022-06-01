interface ProjectSorter {

    sort(projects : Array<Project>) : Array<Project>;
}

enum SorterType
{
    DEFAULT, DATE, PERSONNAL, PROFESSIONAL, SCHOOL
}