function convert(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = 60 * hours;
    //let seconds = 60 * minutes;
    console.log(`${centuries} centuries = ${years} ` + `years = ${days} ` + `days = ${hours} ` + `hours = ${minutes} minutes`);
}
convert(1)