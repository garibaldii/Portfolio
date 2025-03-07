"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Certifique-se de importar o CSS do AOS
import { Button } from '../ui/button';
import ProjectCard from '../atoms/ProjectCard';
import { motion } from 'framer-motion';
import Rotate from '../atoms/Example';

export default function Projects() {
    useEffect(() => {
        // Inicializando AOS no lado do cliente
        AOS.init({
            duration: 3000, // Duração do efeito de animação
        });
    }, []); // O array vazio [] garante que isso será executado apenas uma vez, após a montagem do componente

    return (
        <div>
            <div className="flex flex-col items-center justify-center " data-aos="fade-up">
                <h1 className="text-2xl font-bold">My Projects</h1>
                <p className="text-gray-600">Take a look at my personal projects!</p>

                <div id='buttons' className="flex ">
                    <Button>React/NextJS Static</Button>
                    <Button>Java</Button>
                    <Button>Angular/MongoDB</Button>
                </div>

                <div id='projects' className="flex  items-center ">
                    <ProjectCard
                        name='BigFort São Conrado'
                        description='Landing Page'
                        imagePath='/images/Sorocaba - São Conrado SP.png'
                    />
                </div>
            </div>


<Rotate/>

        </div>

    );
}
