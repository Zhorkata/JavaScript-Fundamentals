function formatGrade(grade) {
    let result = '';
    if (grade < 3.00) {
        grade = 2;
        result = `Fail (${grade})`;
    }
    else {
        grade = grade.toFixed(2)
        if (grade < 3.50) {
            result = `Poor (${grade})`;
        } else if (grade < 4.50) {
            result = `Good (${grade})`;
        } else if (grade < 5.50) {
            result = `Very good (${grade})`;
        } else {
            result = `Excellent (${grade})`;
        }
    }
    console.log(result);
}
formatGrade(2.99);
formatGrade(4.50);
formatGrade(3.33);
