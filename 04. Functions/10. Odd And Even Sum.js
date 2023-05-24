function oddEven(num) {
   let numAsString = num + " ";
   let evenResult = 0;
   let oddResult = 0;
   for (let i = 0; i < numAsString.length; i++) {
      // console.log(numAsString[i]);
      //  result += Number(numAsString[i]);
      if (Number(numAsString[i]) % 2 === 0) {
         evenResult += Number(numAsString[i]);//4
      } else {
         oddResult += Number(numAsString[i]);//9
      }
   }
   console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`);
}
oddEven(1000435)
oddEven(3495892137259234)
