// function spiceMustFlow(num) {
//     let firstDay = num;
//     let secondDay = num - 10;
//     let thirdDay = secondDay - 10;
// }
// spiceMustFlow(111)
function spiceMustFlow(num) {
    let dayCount = 0;
    let total = 0;
    while (num >= 100) {
        dayCount++;
        total += num - 26;
        num -= 10;
    }
    console.log(dayCount);
    let a = dayCount !== 0 ? total - 26 : total;
    console.log(a);
}
spiceMustFlow(111)