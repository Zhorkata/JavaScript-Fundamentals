function movies(data) {

    let films = [];

    data.forEach(row => {

        if (row.includes('addMovie')) {

            let movieName = row.split('addMovie ')[1];
            films.push({ name: movieName });

        } else if (row.includes('directedBy')) {

            let [name, director] = row.split(' directedBy ');

            let movie = films.find(m => m.name === name);

            if (movie) {
                movie.director = director;
            }

        } else if (row.includes('onDate')) {

            let [name, date] = row.split(' onDate ');
            let movie = films.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    });

    films.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])
console.log(`--------CASE-----`)
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])
