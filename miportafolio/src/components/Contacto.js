import React from "react";
import { Link } from "react-router-dom";
import '../style/Contacto.css';

function Contacto() {
  return (
    <div className="redes">
      <h1>Mis redes</h1>
      <ul>
        <li><Link to="https://wa.me/79103782">WHATSAPP</Link></li>
        <li><Link to="https://www.facebook.com/yandira.morales.33/">FACEBOOK</Link></li>
        <li><Link to="https://www.tiktok.com/@enilse71">TIKTOK</Link></li>
      </ul>
    </div>
  );
}

export default Contacto;
