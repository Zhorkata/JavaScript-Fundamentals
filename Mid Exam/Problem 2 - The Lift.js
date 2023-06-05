function theLift(arr) {
    let people = Number(arr.shift());
    let maxCapacity = 4;
  
    let arrNum = arr[0].split(' ').map(Number);
  
    for (let i = 0; i < arrNum.length; i++) {
      if (arrNum[i] < maxCapacity) {
        let availableSpace = maxCapacity - arrNum[i];
        if (people >= availableSpace) {
          arrNum[i] += availableSpace;
          people -= availableSpace;
        } else {
          arrNum[i] += people;
          people = 0;
        }
      }
  
      if (people === 0) {
        console.log(`The lift has empty spots!\n${arrNum.join(' ')}`);
        return;
      }
    }
  
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(arrNum.join(' '));
  }
  
  console.log('--------CASE 1--------');
  theLift(["15", "0 0 0 0 0"]);
  
  console.log('--------CASE 2--------');
  theLift(["20", "0 2 0"]);
  
