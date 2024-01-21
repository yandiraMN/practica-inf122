
import React, { useState } from 'react';
import TableroD from './TableroD';

function Juego() {
    const [historial, setHistorial] = useState([{ cuadros: Array(9).fill(null) }]);
    const [numeroPaso, setNumeroPaso] = useState(0);
    const [esTurnoDeX, setEsTurnoDeX] = useState(true);

    const alHacerClic = (i) => {
        const nuevoHistorial = historial.slice(0, numeroPaso + 1);
        const actual = nuevoHistorial[nuevoHistorial.length - 1];
        const cuadros = actual.cuadros.slice();

        if (calcularGanador(cuadros) || cuadros[i]) {
            return;
        }
        cuadros[i] = esTurnoDeX ? 'X' : 'O';
        setHistorial([...nuevoHistorial, { cuadros }]);
        setNumeroPaso(nuevoHistorial.length);
        setEsTurnoDeX(!esTurnoDeX);
    };

    const saltarA = (paso) => {
        if(paso===0){
            reiniciarJuego();
        }else{
            setNumeroPaso(paso);
            setEsTurnoDeX(paso%2===0);
        }
    };
    const reiniciarJuego = () => {
        setHistorial([{ cuadros: Array(9).fill(null) }]);
        setNumeroPaso(0);
        setEsTurnoDeX(true);
    };

    const actual = historial[numeroPaso];
    const ganador = calcularGanador(actual.cuadros);
    const movimientos = historial.map((paso, movimiento) => (
        <li key={movimiento}>
            <button onClick={() => saltarA(movimiento)}>
                {movimiento ? `Ir al movimiento #${movimiento}` : 'Ir al inicio del juego'}
            </button>
        </li>
    ));
    const estado = ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${esTurnoDeX ? 'X' : 'O'}`;

    return (
        <div className="juego">
            <div className="tablero-juego">
                <TableroD cuadros={actual.cuadros} onClick={alHacerClic} />
            </div>
            <div className="informacion-juego">
                <div>{estado}</div>
                <ol>{movimientos}</ol>
            </div>
        </div>
    );
}
function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const [a, b, c] of lineas) {
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    if (cuadros.every((cuadro) => cuadro !== null)) {
        return 'Empate';
    }
    return null;
}
export default Juego;