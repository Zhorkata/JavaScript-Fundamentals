function towns(data){

    data.forEach(row => {
        row.split(' , ')
        let [townName, latitude, longitude] = row.split(' | ');

        let object = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(object);
    });
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])
