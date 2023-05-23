function addRemove(array) {
  let newArray = [];
  let numberCount = 1;
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case 'add':
        newArray[index] = numberCount;
         index++;
        break;
      case 'remove':
        if (index > 0) {
          let tempArray = [];
          for (let j = 0; j < index - 1; j++) {
            tempArray[j] = newArray[j];
          }
          newArray = tempArray;
          index--;
        }
        break;
    }
    numberCount++;
  }

  if (newArray.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArray.join(' '));
  }
}
addRemove(["add", "add", "add", "add"]);
console.log('--------');
addRemove(['add', 'add', 'remove', 'add', 'add']);
console.log('--------');
addRemove(['remove', 'remove', 'remove']); 