function schoolGrades(input) {
    let gradesList = {};

    for (const line of input) {
        let entry = line.split(" ");
        let name = entry[0];
        let grades = entry.slice(1).map(Number).join();

        if (gradesList.hasOwnProperty(name)) {
            gradesList[name] = gradesList[name].concat(grades);
        } else {
            gradesList[name] = grades;
        }

    }

}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])
