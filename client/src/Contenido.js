import {useState} from 'react';

//importamos componentes
import {Header} from './Header';
import ContactForm from './Form';
import Footer from './Footer';
import Info from './LadingInfo';
import { FechasImpor } from "./FechasImportantes";


export function Main() {
    const [activo, setActivo] = useState(1); //estado actual siempre el 1
    function enlaces(id){
        console.log('cambio enlace:', id);
        setActivo(id);
    }

    return <>
        <Header enlaces={enlaces} />
        <section id="contenido">
            {activo === 1 ?  <><Info/> <ContactForm/></> : <FechasImpor/> }
        </section>
        <Footer/>
    </>

}