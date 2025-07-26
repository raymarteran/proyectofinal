import { useState } from 'react';

import { CambiarModo } from './ModoOscuro';
import IconoMenu from './media/iconos/bars-solid.svg';
import IconoX from './media/iconos/x-solid.svg';

export function Header({enlaces}) {

    const [menu, setMenu] = useState(false);

    function MenuAbrir() {
        setMenu(true);
        console.log('abriendo menu');
    }
    function MenuCerrar() {
        console.log('cerrando menu');
        setMenu(false);
    }

    return <header>
        <section className='header-principal'>
            <button onClick={() => MenuAbrir()}> <img src={IconoMenu} alt='Abrir Menú'/></button>
            <h1>TusPelis</h1>
            <CambiarModo/>
        </section>
        <section className={menu === true ? 'menu abierto' : 'menu cerrado'}>
            <button onClick={() => MenuCerrar()}> <img src={IconoX} alt='Cerrar Menú'/> </button>
            <h3 onClick={()=>enlaces(1)}>Inicio</h3>
            <h3 onClick={()=>enlaces(2)}>Buscar</h3>
            <h3 onClick={()=>enlaces(3)}>Explorar</h3>
        </section>
        {menu === true ? <div className='fondo'></div> : <></>}
    </header>
}