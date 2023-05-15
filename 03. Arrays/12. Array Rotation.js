function rotation(arr, rotCount) {
  while (rotCount > 0) {
    arr.push(arr[0]);
    arr.shift();
    rotCount--;
  }
  console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);

/*function arrayRotation(arr, rotationCount) {
  let buffArr = [];
  for (let i = 0; i < rotationCount; i++) {
    let currentElement = arr[0];
    for (let j = 1; j < arr.length; j++) {
      buffArr.push(arr[j]);
    }
    buffArr.push(currentElement);
    arr = buffArr;
    buffArr = [];
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2); */
//Second solution for this exercise
