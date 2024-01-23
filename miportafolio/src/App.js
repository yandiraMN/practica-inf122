import React from 'react';
import './App.css';
import youtube from './images/youtube.svg';
import github from './images/github.svg';
import tresenraya from './images/tresenraya.jpg';
import todolist from './images/todolist.jpg';
import perfil from './images/perfil.jpg';
import Botn from './components/Botn';
import Contacto from './components/Contacto';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='profile-info'>
          <div className='imagenM'>
            <img src={perfil} alt="foto" />
          </div>
          <div className='info'>
            <h2>Yandira Enilse Morales Nina</h2>
            <h3>Estudiante de Informatica</h3>
            <div className='imagen'>
              <a href="https://www.youtube.com/@yandiraenilsemoralesnina212" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="Logo de YouTube" />
              </a>
              <a href="https://github.com/yandiraMN" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Logo de GitHub" />
              </a>
            </div>
          </div>
        </div>
        <div className='profile-facts'>
          <div>Tercer semestre</div>
          <div>Curso de marketing</div>
          <div>Junior</div>
        </div>
        <div className='buttons'>
          <a href="/mi-cv.pdf" download>
            <Botn texto='Descargar CV' />
          </a>
          <Link to="/contacto" target="_blank" rel="noopener noreferrer">
            <Botn texto="Contactame" />
          </Link>
        </div>
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <h2>Portafolio</h2>
        <div className='imagenL'>
          <div>
            <a href="https://github.com/yandiraMN/practica-inf122/tree/main/tres-en-raya" target="_blank" rel="noopener noreferrer">
              <img src={tresenraya} alt="Logo de GitHub" />
            </a>
          </div>
          <div>
            <a href="https://github.com/yandiraMN/inf122/tree/main/semana3/miniproyecto" target='_blank' rel='noopener noreferrer'>
              <img src={todolist} alt="Logo de GitHub" />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;