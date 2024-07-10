import React, { useEffect, useState } from 'react';
import { Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

import './randomGif.css';

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('ca7Rpvg78nSAtZbG6pP5pmZNSfoqeHfA');

// fetch gifs of cats with a random offset
const fetchGifs = async () => {
    const randomOffset = Math.floor(Math.random() * 100); // Genera un offset aleatorio entre 0 y 99
    const { data } = await gf.search('cats', { offset: randomOffset, limit: 3 });
    return data;
};

function RandonGif() {
    const [gifs, setGifs] = useState([]);

    const getNewGifs = () => {
        fetchGifs().then(setGifs);
    };

    useEffect(() => {
        getNewGifs();
    }, []);


    const getMessage = () =>{
        alert('De nada 👍')
    }
 
    return (
        <section className='randomGif'>
            <h3 className='titulo'>TE REGALAMOS UNOS GATITOS</h3>
            <div>
                {gifs.map((gif) => (
                    <div key={gif.id} style={{ width: '80vw', marginBottom: '20px' }}>
                        <Gif gif={gif} width={window.innerWidth * 0.8} />
                    </div>
                ))}
            </div>
            <button onClick={getMessage} className='boton'>ME GUSTARON. GRACIAS</button>
            <button onClick={getNewGifs} className='boton'>QUIERO OTROS</button>


         {/*    <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/Rz9wM2XlX2eP2Zm3HY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/sesamestreet-sesame-street-cookie-monster-Rz9wM2XlX2eP2Zm3HY">via GIPHY</a></p> */}

        </section>
    );
}

export default RandonGif;
