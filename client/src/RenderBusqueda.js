
function detalle() {
    console.log('aqui miestras esperamos detalles :D')
}

export function Renderizar({resultado, valor}) {
    if (!valor) {
        return <p className="mensaje">¡Encuentra tus Películas Favoritas!</p>
    } else if (resultado.length > 0) {
        return <div className="busqueda">
            {resultado.map((dat) => {
                console.log('soy dat',dat);
                return (
                    <section key={dat.id} className="busqueda-dat">
                        <img src={"https://image.tmdb.org/t/p/original/"+dat.poster_path} className="busqueda-poster"/>
                        <h3> {dat.title} </h3>
                        <div>
                            <p> {dat.vote_average}★ </p>
                            <p> {dat.release_date} </p>
                        </div>
                        <button className="busqueda-boton" parametro={dat.id} onClick={()=> detalle()}>¡VER!</button>
                    </section>
                )
            })}
        </div>
    } else {
        return <p className="mensaje">Esa Película No Está Disponible</p>
    }

}