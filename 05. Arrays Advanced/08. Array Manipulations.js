function manipulateArray(commands) {
  let array = commands.shift().split(' ').map(Number);

  for (let command of commands) {
    let [action, arg1, arg2] = command.split(' ');

    if (action === 'Add') {
      array.push(Number(arg1));
    } else if (action === 'Remove') {
      array = array.filter(num => num !== Number(arg1));
    } else if (action === 'RemoveAt') {
      array.splice(Number(arg1), 1);
    } else if (action === 'Insert') {
      array.splice(Number(arg2), 0, Number(arg1));
    }
  }

  console.log(array.join(' '));
}

// Example usage
manipulateArray(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
// Output: 4 53 6 8 43 3

manipulateArray(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
// Output: 6 2 6 65 42 8
