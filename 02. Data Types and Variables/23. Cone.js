function cone(radius, height){
let volume = (Math.PI * (Math.pow(radius, 2)) * height) / 3;
let area = (Math.PI * radius) * (radius + Math.sqrt((Math.pow(radius, 2))+ (Math.pow(height , 2)))) ;
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5)
// //volume = 47.1239
// //area = 83.2298
