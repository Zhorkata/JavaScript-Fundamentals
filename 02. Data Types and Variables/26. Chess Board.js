function chessBoard(n) {
    let buff = "";
    buff += '<div class="chessboard">\n';
    for (let col = 1; col <= n; col++) {
        buff += '  <div>\n'
        for (let row = 1; row <= n; row++) {
            if ((row + col) % 2 === 0) {
                buff += '   <span class="black"></span>\n';
            } else {
                buff += '    <span class="white"></span>\n ';
            }
        }
        buff += ' </div>\n'
    }
    buff += '</div>'
    console.log(buff);
}
chessBoard(3);
// function chessBoard(n) {
//     let buff = "";
//     buff += '<div class="chessboard">\n';
//     for (let i = 1; i <= n; i++) {
//         buff+= '  <div>\n'
//         for (let j = 1; j <= n; j++) {
//             if ((i + j) % 2 === 0) {
//                 buff += '   <span class="black"></span>\n';
//             } else {
//                 buff += '    <span class="white"></span>\n ';
//             }
//         }
//         buff += ' </div>\n'
//     }
//     buff+= '</div>'
//     console.log(buff);
// }
// chessBoard(3)
