import { useEffect, useState  } from "react";
import { Géneros } from "./API";
import { Películas } from "./ExplorarPeliculas";


export function RenderGéneros() {
  const [listaGéneros, setListaGéneros] = useState({ genres: [] });
  console.log("ra");

  useEffect(() => {
    console.log("use");
    const esperarDatos = async () => {
      try {
        const lista = await Géneros();
        console.log("lista");
        setListaGéneros(lista);
      } catch (error) {
        // Es importante manejar los errores aquí
        console.error("Error al obtener los géneros:", error);
      }
    };
    esperarDatos();
  }, []);



  const desplazarIzquierda = (name) => {
    let scroll = document.getElementById('Carrusel'+name)
    if (scroll) {
      scroll.scrollLeft = scroll.scrollLeft - 200; // Ajusta este valor según sea necesario
    }
  };

  const desplazarDerecha = (name) => {
    let scroll = document.getElementById('Carrusel'+name)
    if (scroll) {
      scroll.scrollLeft = scroll.scrollLeft + 200; // Ajusta este valor según sea necesario
    }
  };

  // Empezamos a construir el render
  return (
    <div>
      {listaGéneros.genres.length > 0
        ? listaGéneros.genres.map((genre) => (
            <div className="GeneroExplorador" key={genre.id}>
              <h2 className="GenerosLista">
                {genre.name}
              </h2>
              
              
                <div className="IzquierdaExplorarDiv">
                  <button className="IzquierdaExplorar" onClick={() => desplazarIzquierda(genre.name)}>{"<"}</button>
                </div>
                <div className="DerechaExplorarDiv">
                  <button className="DerechaExplorar"  onClick={() => desplazarDerecha(genre.name)}>{">"}</button>
                </div>
              
              <div id={'Carrusel'+genre.name} className="CarruselExplorador">
                <Películas  genero={genre.id} lista={listaGéneros} />
              </div>
              
            </div>
          ))
        : "Cargando..."}
    </div>
  );
}
