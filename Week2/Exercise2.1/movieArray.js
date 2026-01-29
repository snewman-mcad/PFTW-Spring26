let myMovies = ["Ready Player One", "Knives Out", "Free Guy", "Boss Level", "Death on the Nile"];
//checking the myMovies array
console.log("These are my favorite movies:", myMovies);

//prompt user for their favorite movie
let newMovie = window.prompt("What is your favorite movie?");
//add user input to the myMovies array
myMovies.push(newMovie);

//checking the addition of the the new movie to the array
console.log("Updated list of movies:", myMovies);

//changing the array to a string
console.log("Updated list of movies: ", myMovies.toString());