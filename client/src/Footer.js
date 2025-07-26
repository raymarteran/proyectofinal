import React from 'react';

//iconos
import IconoFacebook from './media/iconos/facebook-f.svg';
import IconoTwitter from './media/iconos/x-twitter.svg';
import IconoInstagram from './media/iconos/instagram.svg';

const Footer = () => {
 return (
    <footer className="footer">
      <p className="footer-titulo">¡Forma Parte de TusPelis!</p>
      <p className="footer-text">tuspelis@correoficticio.com</p>
      <div className='footer-redes'>
        <a href='https://twitter.com' target="_blank" rel="noreferrer"><img src={IconoTwitter} alt='Siguenos en Twitter' ></img></a>
        <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={IconoFacebook} alt='Siguenos en Facebook' ></img></a>
        <a href='https://instagram.com' target="_blank" rel="noreferrer"><img src={IconoInstagram} alt='Siguenos en Instagram' ></img></a>
      </div>
      <p className="footer-text">© 2023 Todos los derechos reservados</p>
    </footer>
 );
};

export default Footer;