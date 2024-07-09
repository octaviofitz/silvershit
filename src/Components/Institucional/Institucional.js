import React from 'react';

import './institucional.css';

function Institucional() {
    return (
        <section className='institucional'> 
            <h5>También somos serios</h5>
            <p>Y lo podemos demostrar ☝️</p>
            <p>Haciendo click acá abajo</p>
           
            <div style={{ width: '80%', height: 0, paddingBottom: '75%', position: 'relative' }}>
      <iframe
        src="https://giphy.com/embed/z835RsRqQHOlC4rsBr"
        width="100%"
        height="100%"
        style={{ position: 'absolute' }}
        className="giphy-embed"
        allowFullScreen
        title="Giphy Embed"
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/sesamestreet-sesame-street-cookie-monster-z835RsRqQHOlC4rsBr">
        </a>
      </p>
    </div>

    <img  src=''/>
        </section>
    );
}

export default Institucional;