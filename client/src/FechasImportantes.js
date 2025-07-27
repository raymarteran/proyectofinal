import { useEffect, useState  } from "react";
import { Dates } from "./DatesImport";


export function FechasImpor() {
  const generoDefecto = "fechas importantes";

  const desplazarIzquierda = () => {
    let scroll = document.getElementById('Carrusel')
    if (scroll) {
      scroll.scrollLeft = scroll.scrollLeft - 200; // Ajusta este valor según sea necesario
    }
  };

  const desplazarDerecha = () => {
    let scroll = document.getElementById('Carrusel')
    if (scroll) {
      scroll.scrollLeft = scroll.scrollLeft + 200; // Ajusta este valor según sea necesario
    }
  };

  // Empezamos a construir el render
  return (
    <div>
      <div className="GeneroExplorador">
        <h2 className="GenerosLista">
          {generoDefecto}
        </h2>
        
        <div className="IzquierdaExplorarDiv">
          <button className="IzquierdaExplorar" onClick={desplazarIzquierda}>{"<"}</button>
        </div>
        <div className="DerechaExplorarDiv">
          <button className="DerechaExplorar" onClick={desplazarDerecha}>{">"}</button>
        </div>
        
        <div id='Carrusel' className="CarruselExplorador">
          <Dates  genero={generoDefecto} />
        </div>
        
      </div>
    </div>
  );
}

