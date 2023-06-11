function reception(array) {

    let studentsHelpedPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);//10
    let studentCount = Number(array[3]);//40
    let time = 0;
    
    while (studentCount > 0) {
        studentCount -= studentsHelpedPerHour;
        time++;

        if (time % 4 === 0) {
            time++;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
reception(['5', '6', '4', '20'])
reception(['1', '2', '3', '45'])
reception(['3', '2', '5', '40'])
