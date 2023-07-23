function hashtag(text) {
    const placeholders = text.split(' ');
    for (let i = 0; i < placeholders.length; i++) {

        if(placeholders[i].includes('#')){
            console.log(placeholders[i].slice(1));
        }
    }
}
hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')
console.log(`---CASE 2---`);
hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')

//60/100 by JUDGE
