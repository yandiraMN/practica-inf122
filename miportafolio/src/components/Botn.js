import React from 'react';
import '../style/Botn.css';
import BotonD from '../images/BotonD.svg';

function Boton({ onClick, texto }) {
    return (
        <button onClick={onClick}>
            {texto}
            <img src={BotonD} alt='logodeboton'/>
        </button>
    );
}
export default Boton;