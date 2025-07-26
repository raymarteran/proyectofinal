
function detalle() {
    console.log('aqui miestras esperamos detalles :D')
}

export function Renderizar({resultado, valor}) {
    if (!valor) {
        return <p className="mensaje">¡Encuentra tus Películas Favoritas!</p>
    } else if (resultado.length > 0) {
        return <div className="busqueda">
            {resultado.map((peli) => {
                console.log('soy peli',peli);
                return (
                    <section key={peli.id} className="busqueda-peli">
                        <img src={"https://image.tmdb.org/t/p/original/"+peli.poster_path} className="busqueda-poster"/>
                        <h3> {peli.title} </h3>
                        <div>
                            <p> {peli.vote_average}★ </p>
                            <p> {peli.release_date} </p>
                        </div>
                        <button className="busqueda-boton" parametro={peli.id} onClick={()=> detalle()}>¡VER!</button>
                    </section>
                )
            })}
        </div>
    } else {
        return <p className="mensaje">Esa Película No Está Disponible</p>
    }

}