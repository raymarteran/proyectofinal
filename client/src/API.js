const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg1ZmI5ZGUxN2U5OTNiMzkxZDJiOTk4ZDYxZTNjNyIsInN1YiI6IjY0YTJlOTExZThkMDI4MDExY2Y4ZDc0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFrQpVBqiYKbi9FEPst6wTFWA45YbIRKNYtJGvxlRuk'
    }
};

let idioma = "es-MX"
const httpApi ="https://api.themoviedb.org/3/"

const fechasComemorativas = [
    
    {
      "fecha": "1864-10-26",
      "titulo": "Nacimiento de José Gregorio Hernández",
      "descripcion": "Nació en Isnotú, estado Trujillo, Venezuela. Considerado un médico, científico, profesor y filántropo de profunda vocación religiosa y dedicación a los más necesitados."
    },
    {
      "fecha": "1888-06-28",
      "titulo": "Graduación como Médico",
      "descripcion": "Se gradúa de Doctor en Medicina en la Universidad Central de Venezuela (UCV) en Caracas, obteniendo el título con calificaciones sobresalientes."
    },
    {
      "fecha": "1919-06-29",
      "titulo": "Fallecimiento de José Gregorio Hernández",
      "descripcion": "Muere de forma trágica a los 54 años en Caracas, tras ser atropellado por uno de los pocos automóviles que circulaban en la ciudad. Su muerte causó una gran conmoción popular."
    },
    {
      "fecha": "1949-06-29",
      "titulo": "Inicio de la Causa de Beatificación y Canonización",
      "descripcion": "El Arzobispo de Caracas, Monseñor Lucas Guillermo Castillo Hernández, da inicio al proceso de su beatificación y canonización ante la Santa Sede."
    },
    {
      "fecha": "1986-01-16",
      "titulo": "Declarado Venerable",
      "descripcion": "El Papa Juan Pablo II reconoce sus virtudes heroicas y le confiere el título de 'Venerable', un paso decisivo en el camino hacia la santidad."
    },
    {
      "fecha": "2020-06-19",
      "titulo": "Aprobación del Milagro para la Beatificación",
      "descripcion": "El Papa Francisco aprueba el decreto del milagro atribuido a su intercesión en la niña Yaxury Solórzano, lo que dio paso a su beatificación."
    },
    {
      "fecha": "2020-10-26",
      "titulo": "Exhumación de sus Restos",
      "descripcion": "En coincidencia con el 156 aniversario de su natalicio, se realiza la exhumación de sus restos mortales en la Iglesia de Nuestra Señora de la Candelaria en Caracas, como parte del protocolo para la beatificación."
    },
    {
      "fecha": "2021-04-30",
      "titulo": "Ceremonia de Beatificación",
      "descripcion": "En una solemne ceremonia celebrada en Caracas, José Gregorio Hernández es proclamado Beato de la Iglesia Católica, un acontecimiento de gran alegría para el pueblo venezolano."
    },
    {
      "fecha": "2025-02-25",
      "titulo": "Aprobación de la Canonización",
      "descripcion": "El Papa Francisco aprueba la canonización del beato venezolano José Gregorio Hernández, allanando el camino para que sea declarado santo."
    },
    {
      "fecha": "2025-10-19",
      "titulo": "Fecha tentativa para la Canonización",
      "descripcion": "Aunque sujeta a confirmación oficial por el consistorio de cardenales, se ha mencionado como fecha probable para la ceremonia de canonización de José Gregorio Hernández."
    }
]

export async function APIbuscar(titulo) { 
    try {
        const responsedata = await fetch(`${httpApi}search/movie?query=${encodeURIComponent(titulo)}&language=${idioma}`, options);
        const response = await responsedata.json();
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
        const responsedata = await fetch(`${httpApi}discover/movie?language=${idioma}`, options);
        const todas = await responsedata.json();
        console.log("se ejecuto todas")
        return <>
            <p>hay respuestas</p>
            {console.log("soy todas", todas)}
        </>
    } catch (err) {
        console.error(err);
    } 
}


export async function GetDates(){
    return fechasComemorativas
}