import { useState , useEffect } from "react";

import { APIbuscar } from "./API";
import { Renderizar } from "./RenderBusqueda";

export function Buscar() {
    // console.log('buscaaar')
    const [resultado, setResultado] = useState([]);
    const [valor, setValor] = useState("");
    const [cargando, setCargando] = useState(false);

    //Si ocurre algun cambio se ejecuta
    useEffect(() => {
        const timer = setTimeout(() => { //esperamos dos segundos por si hay un cambio
            // console.log('vamos a la API');
            handleChange(); //mandamos valor
            setCargando(false);
        }, 2000);
    
        return () => { //al cambiar el titulo(valor)
            console.log('hubo un cambio')
            clearTimeout(timer); //limpiamos tiempo
            setResultado([]); //limpiamos resultados
            setCargando(true);
        };
    }, [valor]);

    //función para enviar titulo(valor) a la API
    async function handleChange() {
        if (valor) {
            console.log('enviando valor a la api')
            const pelis = await APIbuscar(valor);
            console.log(pelis)
            setResultado(pelis)
        } else {
            console.log('no hay un valor en el input')
        }
    }

    return <>
        <div className="barra-buscar">
            <input type="text" placeholder="Ingresa el título de la película" value={valor} onChange={(e) => {setValor(e.target.value)}}></input>
        </div>
        {cargando ? 
            <div className={cargando ? "loading" : ""}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> 
            :
            <Renderizar resultado={resultado} valor={valor} />
        }
    </>
}