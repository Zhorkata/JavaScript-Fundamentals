function biggestNum(first, second, third){
if(first >= second && first >= third){
    console.log(first);
}else if(second >= first && second >= third){
    console.log(second);
}else if(third >= first && third >= second){
    console.log(third);
}
}biggestNum(2, 2, 2)