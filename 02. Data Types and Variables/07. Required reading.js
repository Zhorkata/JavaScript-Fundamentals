function bookReading(pagesCount, pagesInHour, days) {
    let totalTime = pagesCount/pagesInHour;
    let hoursPerDay = totalTime/days;
    console.log(hoursPerDay);
} bookReading(212, 20, 2)