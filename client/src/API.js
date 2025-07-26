const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg1ZmI5ZGUxN2U5OTNiMzkxZDJiOTk4ZDYxZTNjNyIsInN1YiI6IjY0YTJlOTExZThkMDI4MDExY2Y4ZDc0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFrQpVBqiYKbi9FEPst6wTFWA45YbIRKNYtJGvxlRuk'
    }
};

let idioma = "es-MX"
const httpApi ="https://api.themoviedb.org/3/"

export async function APIbuscar(titulo) { 
    try {
        const responsePelis = await fetch(`${httpApi}search/movie?query=${encodeURIComponent(titulo)}&language=${idioma}`, options);
        const response = await responsePelis.json();
        // console.log(response);
        const todas = response.results;
        const busqueda = todas.slice(0, 6);
        // console.log("soy busqueda", typeof(busqueda), busqueda);
        return busqueda;
    } catch (err) {
        console.error(err);
    } 
}
export async function API() { 
    try {
        const responsePelis = await fetch(`${httpApi}discover/movie?language=${idioma}`, options);
        const todas = await responsePelis.json();
        console.log("se ejecuto todasPelis")
        return <>
            <p>hay peliculas</p>
            {console.log("soy todas", todas)}
        </>
    } catch (err) {
        console.error(err);
    } 
}

export async function Géneros(){
    try {
        let listaDeGéneros =  await fetch(`${httpApi}/genre/movie/list?language=${idioma}`, options)
        console.log(listaDeGéneros);
        let listaDeGénerosJson = await listaDeGéneros.json()
        console.log(listaDeGénerosJson);
        if (listaDeGéneros.ok === false) {
            console.log(listaDeGénerosJson.status_message);
            throw listaDeGénerosJson.status_message
        }
        return listaDeGénerosJson 
    } catch (error) {
        console.error(error);
        console.log('error');
        throw error
    }
}
export async function PelículasGéneros(genero){
    try {
        let Películas =  await fetch(`${httpApi}discover/movie?include_adult=false&include_video=false&language=${idioma}&page=1&sort_by=popularity.desc&with_genres=${genero}`, options)
        let PelículasJson = await Películas.json()
        if (Películas.ok === false) {
            console.error(PelículasJson.status_message);
            throw PelículasJson.status_message
        }
        console.log(PelículasJson);
        return PelículasJson 
    } catch (error) {
        console.error(error);
        console.log('error');
        throw error
    }
}