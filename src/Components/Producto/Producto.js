import React from 'react';

import IMGProducto from '../../IMG/Silver.webp';
import Praise from '../../Assets/IMG/praise.gif';

import './producto.css';

function Producto() {
    return (
        <section className='producto'>
           <div>
            <img src={IMGProducto} className='img' alt='Silver Piedras' />
            </div>
            <div>
                <h1 className='titulo'>Silver Piedras</h1>
            <p>OH MY GOD QUÉ BUEN PRODUCTO</p>
            <img src={Praise} className='praise' />
            </div>
        </section>
    );
}

export default Producto;