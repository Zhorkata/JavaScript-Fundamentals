function schoolGrades(input) {
    let gradesList = {};

    for (const line of input) {
        let entry = line.split(" ");
        let name = entry[0];
        let grades = entry.slice(1).map(Number);

        if (gradesList.hasOwnProperty(name)) {
            gradesList[name] = gradesList[name].concat(grades);
        } else {
            gradesList[name] = grades;
        }
    }

    let studentAverages = {};

    // Calculate average grades for each student
    for (const name in gradesList) {
        let grades = gradesList[name];
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = (sum / grades.length).toFixed(2);
        studentAverages[name] = parseFloat(average);
    }

    // Sort student averages alphabetically by name
    let sortedAverages = Object.entries(studentAverages).sort();

    // Print student names and average grades
    for (const [name, average] of sortedAverages) {
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])
console.log(`---------CASE ---2------`)
schoolGrades([
'Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'
])
