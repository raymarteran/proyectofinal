import {useState} from 'react';

//importamos componentes
import {Header} from './Header';
import {Buscar} from './Buscador';
import ContactForm from './Form';
import Footer from './Footer';
import Info from './LadingInfo';
import { RenderGéneros } from "./GenerosRender";


export function Main() {
    const [activo, setActivo] = useState(1); //estado actual siempre el 1
    function enlaces(id){
        console.log('cambio enlace:', id);
        setActivo(id);
    }

    //MUCHACHOS cuando tengan sus componentes colocarlos aquí siguiendo esto: " {activo === 1 ? <Inicio/> : activo === 2 ? <Buscar/> : activo === 3 ? <Explorar/> : Contacto } "
    return <>
        <Header enlaces={enlaces} />
        <section id="contenido">
            {activo === 1 ?  <><Info/> <ContactForm/></> : activo === 2 ? <Buscar/>: <RenderGéneros/> }
        </section>
        <Footer/>
    </>

}