import { useEffect, useState } from "react";
import {GetDates } from "./API";

export function Dates({genero},{listaGéneros} ) {
    const [data,setData] = useState([])

    const getData = async(genre)=>{
        try {
        let dataS= await GetDates()
        setData(dataS)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getData(genero)
    },[listaGéneros])

     console.log(data);

    return<>
    {data.length > 0 ? data.map((fecha)=>(
        <div className='TarjetaExplorar' >
            <div className="TituloTarjeta">
                <h3 className="TituloH3">{fecha.titulo}</h3>
            </div>
            <div className="estrellasContainer">
                <p className="estrellas">{fecha.descripcion}</p>
            </div>
        </div>
    )):<p>Por favor espere...</p>}
    
    </>

}
