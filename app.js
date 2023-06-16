// app.js

const peliculas = require('./peliculas.js');

console.log("Mis películas favoritas:");

for (const pelicula of peliculas) {
  console.log("------------------------------");
  console.log("Título:", pelicula.titulo);
  console.log("Rating:", pelicula.rating);
  console.log("Premios:", pelicula.awards.length > 0 ? pelicula.awards.join(", ") : "Ninguno");
  console.log("Duración:", pelicula.duracion, "minutos");
  console.log("Precio:", pelicula.precio, "USD");
  console.log("Género:", pelicula.genero);
}

console.log("------------------------------");
