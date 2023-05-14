function elca(num, op, num2) {
    switch (op) {
        case '+':
            console.log((num + num2).toFixed(2));
            break;
        case '-':
            console.log((num - num2).toFixed(2));
            break;
        case '*':
            console.log((num * num2).toFixed(2));
            break;
        case '/':
            console.log((num / num2).toFixed(2));
            break;
    }
}
elca(25.5,
    '-',
    3)