import React, { useEffect, useState, useRef } from 'react';
import { Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

import './randomGif.css';

const gf = new GiphyFetch('ca7Rpvg78nSAtZbG6pP5pmZNSfoqeHfA');

const fetchGifs = async () => {
    const randomOffset = Math.floor(Math.random() * 100);
    const { data } = await gf.search('cats', { offset: randomOffset, limit: 3 });
    return data;
};

function RandonGif() {
    const [gifs, setGifs] = useState([]);
    const topRef = useRef(null);

    const getNewGifs = () => {
        fetchGifs().then(setGifs);
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        getNewGifs();
    }, []);

    const getMessage = () => {
        alert('De nada 👍');
    };

    const handleGifClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <section className='randomGif' id='gif' ref={topRef}>
            <h3 className='titulo'>TE REGALAMOS UNOS GIFS DE GATITOS</h3>
            <div className='prueba'>
                {gifs.map((gif) => (
                    <div key={gif.id} className='gifContainer' onClick={handleGifClick}>
                        <Gif gif={gif} width={window.innerWidth < 1024 ? window.innerWidth * 0.8 : 200} />
                    </div>
                ))}
            </div>
            <div className='contenedorBotones'>
                <button onClick={getMessage} className='boton'>ME GUSTARON. GRACIAS</button>
                <button onClick={getNewGifs} className='boton'>QUIERO OTROS</button>
            </div>
        </section>
    );
}

export default RandonGif;
