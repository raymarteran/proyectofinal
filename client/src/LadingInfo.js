import React from 'react';
import imgDr from './media/imgDr.png';
const Info = () => {
 return (
    <div className="info-container">
      <h2> Dr. José Gregorio Hernández</h2>
      <img src={imgDr} alt="Dr. José Gregorio Hernández" />
      <p>José Gregorio Hernández (1864-1919) fue un médico, científico, profesor y filántropo venezolano, conocido como "el médico de los pobres".</p>
      <p>Fue beatificado por la Iglesia Católica en 2021 y está a punto de ser canonizado como santo.</p>
    </div>
 );
};

export default Info;