import React from 'react';
import { Link } from 'react-scroll';

import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <h5 className='titulo'>SILVER SHIT</h5>
            <ul className='lista'>
                <li className='enlaces'><Link activeClass='active' to='producto' smooth={true} duration={1200}>PRODUCTO</Link></li>
                <li className='enlaces'><Link activeClass='active' to='juego' smooth={true} duration={1200}>JUEGO</Link></li>
                <li className='enlaces'><Link activeClass='active' to='gif' smooth={true} duration={1200}>TU GIF</Link></li>
                <li className='enlaces'><a href='https://www.tiktok.com/@silver.piedras' target='__blank'>TIK TOK</a></li>
                <li className='enlaces'><a href='https://silverpiedras.com.ar' target='__blank'>INSTITUCIONAL</a></li>
            </ul>
        </div>
    );
}

export default Footer;