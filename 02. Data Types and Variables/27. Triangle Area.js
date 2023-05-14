function area(a, b, c) {
    let result = Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c)) / 4;
    console.log(result);
} 
area(2, 3.5, 4)
area(3, 5.5, 4)