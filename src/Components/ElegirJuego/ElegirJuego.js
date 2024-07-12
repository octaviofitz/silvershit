import React from 'react';

import Gift from '../../Assets/IMG/gift.svg';

import './elegirJuego.css';

function ElegirJuego() {
    return (
        <section className='elegirJuego'>
            <h3 className='titulo'>Encontrá la caja ganadora</h3>
            
            <div className='containerGift'>
                <img src={Gift} className='img' id='img1' alt='Gif' />
                <img src={Gift} className='img' id='img2' alt='Gif' />
                <img src={Gift} className='img' id='img3' alt='Gif' />
                <img src={Gift} className='img' id='img4' alt='Gif' />
                <img src={Gift} className='img' id='img5' alt='Gif' />
                <img src={Gift} className='img' id='img6' alt='Gif' />
                <img src={Gift} className='img' id='img7' alt='Gif' />
                <img src={Gift} className='img' id='img8' alt='Gif' />
                <img src={Gift} className='img' id='img9' alt='Gif' />
            </div>
            
        </section>
    );
}

export default ElegirJuego;