import React from 'react';
import { Link } from 'react-router-dom';

import './institucional.css';

function Institucional() {

    return (
        <article className='institucional'> 
            <h5 className='titulo'>También somos serios</h5>
            <p className='subtitulo'>Y lo podemos demostrar</p>
           
       
       <div className='container'>

       <div style={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }} className='gif'>
    <iframe 
      src="https://giphy.com/embed/9FWKqTMttcDV9DlXhF" 
      width="100%" 
      height="100%" 
      style={{ position: 'absolute' }} 
      frameBorder="0" 
      className="giphy-embed" 
      allowFullScreen
      title="Giphy Embed"
    ></iframe>
  </div>
  
        <div>
        <button className='boton'><Link to='https://silverpiedras.com.ar' target='__blank'>WEB INSTITUCIONAL</Link></button>
        </div>

        <div style={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }} className='gif'>
    <iframe 
      src="https://giphy.com/embed/Rz9wM2XlX2eP2Zm3HY" 
      width="100%" 
      height="100%" 
      style={{ position: 'absolute' }} 
      frameBorder="0" 
      className="giphy-embed" 
      allowFullScreen
      title="Giphy Embed"
    ></iframe>
  </div>
        </div>
        
        </article>
    );
}

export default Institucional;