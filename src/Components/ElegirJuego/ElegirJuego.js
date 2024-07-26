import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Gift from '../../Assets/IMG/litter.png';
import './elegirJuego.css';

function ElegirJuego() {
    const [winningBoxIndex, setWinningBoxIndex] = useState(0);

    useEffect(() => {
        setWinningBoxIndex(Math.floor(Math.random() * 9)); // Selecciona una caja ganadora aleatoria
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    const handleClick = (index) => {
        if (index === winningBoxIndex) {
            const text = encodeURIComponent('¡Encontré la litera ganadora en este juego! #SilverPiedras');
            const img = 'https://www.petlife.mx/u/fotografias/m/2024/3/27/f768x1-13959_14086_5050.jpg'
            const url = encodeURIComponent(window.location.href); // Puedes cambiarlo por la URL de tu juego si es necesario
            const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

            Swal.fire({
                title: "¡Ganaste!",
                html: `
                    <p>Podés compartir tu resultado con tus seguidores</p>
                    <a href="${twitterUrl}" target="_blank" class="swal2-confirm swal2-styled" style="display: inline-block; margin: 0 5px;">Compartir</a>
                `,
                imageUrl: 'https://media.tenor.com/Db9euJyQnbUAAAAi/chat-pouce.gif', // Reemplaza con la URL de tu ícono personalizado
                imageWidth: 160,
                imageHeight: 160,
                imageAlt: 'Ícono de Ganador',
                showConfirmButton: false,
                timer: 10000 // 10 seconds
            });
        } else {
            Swal.fire({
                title: "Perdiste",
                text: "Intentalo de nuevo",
                imageUrl: 'https://i.redd.it/s6wbxbh11zlb1.jpg', // Reemplaza con la URL de tu ícono personalizado
                imageWidth: 200,
                imageHeight: 150,
                imageAlt: 'Ícono de Ganador',
                timer: 3000 // 3 seconds
            });
        }
    };

    return (
        <section className='elegirJuego' id='juego'>
            <h3 className='titulo'>VAMOS A JUGAR!<br></br>ELEGÍ LA CAJA GANADORA</h3>
            
            <div className='containerGift'>
                <div>
                </div>
                {[...Array(9)].map((_, index) => (
                    <div key={index}>
                        <img
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
