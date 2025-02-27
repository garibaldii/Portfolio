"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Certifique-se de importar o CSS do AOS
import { Button } from '../ui/button';


export default function Projects() {
    useEffect(() => {
        // Inicializando AOS no lado do cliente
        AOS.init({
            duration: 3000, // Duração do efeito de animação
        });
    }, []); // O array vazio [] garante que isso será executado apenas uma vez, após a montagem do componente

    return (
        <div className="text-center" data-aos="zoom-out">
           <h1>My Projects</h1>
           <p>take a look at my personal projects!</p>

            <div id='buttons'>
                <Button>React/NextJS Static</Button>
                <Button>Java</Button>
                <Button>Angular/MongoDB</Button>
            </div>

        </div>
    );
}
