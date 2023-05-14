function week(day) {
    let days = ['Monday',
        'Tuesday', 'Wednesday',
        'Thursday', 'Friday',
        'Saturday', 'Sunday']
    if (day < 1 || day > 7) {
        console.log('Invalid day!');
    } else {
        let curDay = days[day - 1]
        console.log(curDay);
    }
}
week(1)