function smallestNumber(numOne, numTwo, numThree) {

    if (numOne < numTwo && numOne < numThree) {
        return numOne;
    } else if (numOne > numTwo && numTwo < numThree) {
        return numTwo;
    } else {
        return numThree;
    }
}
smallestNumber(2, 5, 3)
smallestNumber(600, 342, 123)
smallestNumber(25, 21, 4)
smallestNumber(2, 2, 2)