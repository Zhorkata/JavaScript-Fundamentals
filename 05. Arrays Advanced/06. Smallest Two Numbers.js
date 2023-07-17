function printSmallestTwoNumbers(numbers) {
  // Sort the array in ascending order
  numbers.sort(function(a, b) {
    return a - b;
  });

  // Take the first two numbers using slice
  let smallestTwo = numbers.slice(0, 2);

  // Print the smallest two numbers
  console.log(smallestTwo.join(' '));
}

printSmallestTwoNumbers([30, 15, 50, 5]); // Output: 5 15
printSmallestTwoNumbers([3, 0, 10, 4, 7, 3]); // Output: 0 3
