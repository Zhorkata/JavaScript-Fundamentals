function theLift(arr) {
    let people = Number(arr.shift());
    let maxCapacity = 4;

    let arrNum = arr[0].split(' ').map(Number);

    for (let i = 0; i < arrNum.length; i++) {
        if(arrNum[i] + maxCapacity > 4){
            arrNum[i] = 4;
            continue;
        }
        arrNum[i] += maxCapacity;

        if (people < maxCapacity) {
            arrNum[i] = people;
            people -= maxCapacity;//15-4; 11-4 ; 7-4 ;
            console.log(`The lift has empty spots!\n${arrNum.join(' ')}`);
            break;
        }else{
        }
        people -= maxCapacity;//15-4; 11-4 ; 7-4 ;

    }
    
}
theLift(["15",
    "0 0 0 0 0"])

//expected output
//The lift has empty spaces!
// 4 4 4 3 0

/* 
First state - 4 0 0 0 -> 11 people left
Second state – 4 4 0 0 -> 7 people left
Third state – 4 4 4 0 -> 3 people left
*/

console.log('--------ANOTHER CASE--------');
theLift(["20",
    "0 2 0"])

//expected output
//There isn't enough space! 10 people in a queue!
//4 4 4

/*
First state - 4 2 0  -> 16 people left
Second state – 4 4 0  -> 14 people left
Third state – 4 4 4 -> 10 people left, but there're no more wagons.
*/

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
  