import React, { useEffect } from 'react';

import './tikTok.css';

function TikTok() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
    return (
        <article className='tiktok'>

            <h4 className='titulo'>Podés encontrarnos en Tik Tok</h4>

            <div className='container'>

             <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@silver.piedras/video/7382617371556547845"
      data-video-id="7382617371556547845"
      style={{ maxWidth: '605px', minWidth: '325px' }}
    >
      <section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="@silver.piedras"
          href="https://www.tiktok.com/@silver.piedras?refer=embed"
        >
          @silver.piedras
        </a>
        <p></p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey"
          href="https://www.tiktok.com/music/Monkeys-Spinning-Monkeys-6746993352891189249?refer=embed"
        >
          ♬ Monkeys Spinning Monkeys - Kevin MacLeod & Kevin The Monkey
        </a>
      </section>
    </blockquote>
    </div>
        </article>
    );
}

export default TikTok;