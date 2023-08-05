function printDNAHelix(length) {
    let sequence = "ATCGTTAGGG";
    let symbolIndex = 0;
  
    for (let i = 0; i < length; i++) {
      let row = i % 4;
      if (row === 0) {
        console.log(`**${sequence[symbolIndex++ % sequence.length]}${sequence[symbolIndex++ % sequence.length]}**`);
      } else if (row === 1 || row === 3) {
        console.log(`*${sequence[symbolIndex++ % sequence.length]}--${sequence[symbolIndex++ % sequence.length]}*`);
      } else if (row === 2) {
        console.log(`${sequence[symbolIndex++ % sequence.length]}----${sequence[symbolIndex++ % sequence.length]}`);
      }
    }
  }
  printDNAHelix(5)