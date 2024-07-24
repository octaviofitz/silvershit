import React, { useState, useEffect } from 'react';
import Gift from '../../Assets/IMG/gift.svg';
import './elegirJuego.css';

function ElegirJuego() {
    const [winningBoxIndex, setWinningBoxIndex] = useState(0);

    useEffect(() => {
        setWinningBoxIndex(Math.floor(Math.random() * 9)); // Selecciona una caja ganadora aleatoria
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    const handleClick = (index) => {
        if (index === winningBoxIndex) {
            const text = encodeURIComponent('¡Encontré la caja ganadora en este juego! #JuegoDeCajas');
            const url = encodeURIComponent(window.location.href); // Puedes cambiarlo por la URL de tu juego si es necesario
            const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            const message = `
                Ganaste!
                Comparte tu resultado:
                Twitter: ${twitterUrl}
                Instagram: Copia el enlace del juego y compártelo manualmente.
            `;
            alert(message);
        } else {
            alert('Perdiste');
        }
    };

    return (
        <section className='elegirJuego'>
            <h3 className='titulo'>VAMOS A JUGAR!<br></br>ELEGÍ LA CAJA GANADORA</h3>
            
            <div className='containerGift'>
                <div>
                </div>
                {[...Array(9)].map((_, index) => (
                    <div>
                    <img
                        key={index}
                        src={Gift}
                        className='img'
                        id={`img${index + 1}`}
                        alt='Gif'
                        onClick={() => handleClick(index)}
                    />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ElegirJuego;
