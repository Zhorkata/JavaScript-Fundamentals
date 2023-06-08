function reception(array) {

    let studentCount = Number(array[array.length - 1])//.pop also is fine
    let studentsHelpedPerHour = 0;
    let time = 0;
    let studentsHelped = 0;

    for (let i = 0; i < array.length - 1; i++) {
        studentsHelpedPerHour += Number(array[i]);//15

        if (i === 2) {
            studentsHelped += studentsHelpedPerHour * 3;//18
            time += 3;
            i = 0;
            studentsHelpedPerHour = 0;
        }
        if(studentsHelped >= studentCount){
            console.log(`Time needed: ${time}h.`);//10

            break;
        }
    }
}
reception(['5', '6', '4', '20'])
reception(['1', '2', '3', '45'])
reception(['3', '2', '5', '40'])
