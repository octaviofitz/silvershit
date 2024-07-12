import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';

import './appRouter.css';
import Footer from '../Footer/Footer';
import RandomGif from '../RandomGif/RandomGif';
import Producto from '../Producto/Producto';
import Institucional from '../Institucional/Institucional';
import LimpiezaPantalla from '../LimpiezaPantalla/LimpiezaPantalla';
import ElegirJuego from '../ElegirJuego/ElegirJuego';

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
            <NavBar />
            <main>
                <Producto />
                <ElegirJuego />
                <RandomGif />
                <LimpiezaPantalla />
                <Institucional />
            </main>
            <Footer />
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;