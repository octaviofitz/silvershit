import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <h5 className='titulo'>SILVER SHIT</h5>
            <ul className='lista'>
                <li className='enlaces'>Gatitos</li>
                <Link to='#gif'><li className='enlaces'>TU GIF</li></Link>
                <Link to='https://www.tiktok.com/@silver.piedras' target='__blank'><li className='enlaces'>TIK TOK</li></Link>
                <li className='enlaces'>Sección2</li>
                <li className='enlaces'>Sección5</li>
            </ul>
        </div>
    );
}

export default Footer;