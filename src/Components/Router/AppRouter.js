import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';

import './appRouter.css';
import Footer from '../Footer/Footer';
import RandomGif from '../RandomGif/RandomGif';
import Producto from '../Producto/Producto';
import LimpiezaPantalla from '../LimpiezaPantalla/LimpiezaPantalla';
import ElegirJuego from '../ElegirJuego/ElegirJuego';
import Redes from '../../Pages/Redes';

import './appRouter.css';

function AppRouter() {
    return (
        <div className='app'>
            <BrowserRouter>
            <NavBar />
            <main>
                <Producto />
                <ElegirJuego />
                <RandomGif />
                <LimpiezaPantalla />
                <Redes />
            </main>
            <Footer />
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;