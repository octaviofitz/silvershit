import React from 'react';

import IMGProducto from '../../IMG/Silver.webp';

import './producto.css';

function Producto() {
    return (
        <section className='producto'>
           <div>
            <img src={IMGProducto} className='img' alt='Silver Piedras' />
            </div>
            <div>
                <h1 className='titulo'>Silver Piedras</h1>
            <p>El mejor producto</p>
            </div>
        </section>
    );
}

export default Producto;