import { useEffect, useState } from 'react';

import IconoClaro from './media/iconos/sun-solid.svg'
import IconoOscuro from './media/iconos/moon-solid.svg'

export function CambiarModo() {
    const [oscuro, setOscuro] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            const systemColorPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            if (systemColorPreference === 'dark') {
                document.body.classList.add('modoOscuro');
                console.log('modo oscuro predeterminado')
                setOscuro(true);
            } else {
                document.body.classList.remove('modoOscuro');
                console.log('modo claro predeterminado')
                setOscuro(false);
            }
        }
    }, []);

    function ModoOscuro() {
        console.log('estamos en cambiar modo');
        document.body.classList.toggle("modoOscuro");
        if (document.body.classList.contains("modoOscuro")) {
            setOscuro(true);
        } else {
            setOscuro(false);
        }
    }

    return <>
        <button onClick={() => ModoOscuro()}> <img src={oscuro === true ? IconoOscuro : IconoClaro} alt='Abrir Menú'/></button>
    </>
}