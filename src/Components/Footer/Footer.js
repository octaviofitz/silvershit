import React from 'react';

import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <h5 className='titulo'>SILVER SHIT</h5>
            <ul className='lista'>
                <li className='enlaces'>Gatitos</li>
                <li className='enlaces'>Tu GIF</li>
                <Link to='https://www.tiktok.com/@silver.piedras' target='__blank'><li className='enlaces'>TIK TOK</li></Link>
                <li className='enlaces'>Sección2</li>
                <li className='enlaces'>Sección5</li>
            </ul>
        </div>
    );
}

export default Footer;