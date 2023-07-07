function meetings(input){
    let meetingList = {};

    for (let i = 0; i < input.length; i++) {

        let [day, name] = input[i].split(' ');
        meetingList[day] = name;
        // if(day)
        // console.log(day);
    }
    for (const day in meetingList) {
        console.log(`${day} -> ${meetingList[day]}`);
    }


}
meetings([
'Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'
])