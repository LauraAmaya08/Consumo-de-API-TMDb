const cargarPeliculas = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d435b5b199e3a5b016833a4f2075b774&page=${pagina}`
    );
    if (response.ok) {
      const datos = await response.json();
      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas +=`<div class= "pelicula">
        <img class= "poster" src= "https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
        <h2 class="titulo">${pelicula.title}</h2>
        </div>
        `;
      });
      document.getElementById("contenedor").innerHTML = peliculas;
    } else {
      throw new Error("Hubo un error :(");
    }
  } catch (error) {
    console.error(error.message);
  }
};

let pagina = 1
const botonAnte = document.getElementById("anterior")
const botonSig = document.getElementById("siguiente")

botonSig.addEventListener("click",()=>{
  if (pagina < 1000){
    pagina+= 1
    cargarPeliculas(pagina)
  }
})

botonAnte.addEventListener("click",()=>{
  if (pagina > 1){
    pagina -= 1
    cargarPeliculas(pagina)
  }
})


cargarPeliculas(pagina);


