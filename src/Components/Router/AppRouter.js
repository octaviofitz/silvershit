import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';

import './appRouter.css';
import Footer from '../Footer/Footer';
import RandomGif from '../RandomGif/RandomGif';
import Producto from '../Producto/Producto';

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
            <NavBar />
            <main>
                <Producto />
                <RandomGif />
            </main>
            <Footer />
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;