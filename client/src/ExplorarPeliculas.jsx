import { useEffect, useState } from "react";
import {PelículasGéneros } from "./API";

export function Películas({genero},{listaGéneros} ) {
    const [película,setPelículas] = useState({results:[]})

    const Pelis = async(genre)=>{
        console.log(typeof genero, 'genero');
        try {
        let películaS= await PelículasGéneros(genre)
        setPelículas(películaS)
        console.log(película.results);

        } catch (error) {
            
        }
    }
    useEffect(()=>{
        Pelis(genero)
    },[listaGéneros])

     console.log(película.results);

    return<>
    {película.results.length > 0 ? película.results.map((peli)=>(
        <div className='TarjetaExplorar' style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${peli.poster_path}')`}} >
            <div className="TituloTarjeta">
                <h3 className="TituloH3">{peli.title}</h3>
            </div>
            <div className="estrellasContainer">
                <span className="estrellas">{generarEstrellas(peli.vote_average)}</span>
            </div>
            

            
        </div>
    )):<p>Por favor espere...</p>}
    
    </>

function generarEstrellas(calificacion) {
    const estrellasLlenas = '★'.repeat(Math.round(calificacion));
    const estrellasVacias = '☆'.repeat(10 - Math.round(calificacion));
    return estrellasLlenas + estrellasVacias;
  }
}