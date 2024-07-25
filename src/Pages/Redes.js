import React from 'react';

import './redes.css';
import TikTok from '../Components/TikTok/TikTok';
import Institucional from '../Components/Institucional/Institucional';

function Redes() {
    return (
        <section className='redes'>
            <h4 className='titulo'>DÓNDE ENCONTRARNOS</h4>
            <TikTok />
            <Institucional />
        </section>
    );
}

export default Redes;