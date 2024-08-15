import React, { useRef, useEffect } from 'react';
import Limpieza from '../../Assets/Video/Limpieza.mp4';

import './limpiezaPantalla.css';

function LimpiezaPantalla() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        let isPlaying = false;

        const handlePlay = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isPlaying) {
                    video.play();
                    isPlaying = true;
                } else if (!entry.isIntersecting && isPlaying) {
                    video.pause();
                    isPlaying = false;
                }
            });
        };

        const observer = new IntersectionObserver(handlePlay, { threshold: 0.5 });

        if (video) {
            observer.observe(video);
        }

        return () => {
            if (video) {
                observer.unobserve(video);
            }
        };
    }, []);

    return (
        <section className='limpieza'>
           <video ref={videoRef} width="100%" controls loop muted>
            <source src={Limpieza} type='video/mp4'></source>
           </video>
        </section>
    );
}

export default LimpiezaPantalla;
