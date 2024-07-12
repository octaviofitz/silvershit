import React, { useRef, useEffect } from 'react';
import Limpieza from '../../Assets/Video/Limpieza.mp4';

function LimpiezaPantalla() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handlePlay = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
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
        <section>
           <video ref={videoRef} width="100%" controls loop muted>
            <source src={Limpieza} type='video/mp4'></source>
           </video>
        </section>
    );
}

export default LimpiezaPantalla;
