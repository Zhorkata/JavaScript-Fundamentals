function towns(data){

    let object = {};
    data.forEach(row => {row.split(' , ')
        console.log(row[0]);
    });

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])