"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Certifique-se de importar o CSS do AOS
import ProjectCard from "../atoms/ProjectCard";
import Background from "../atoms/Background";
import { motion } from "framer-motion";

export default function Projects() {
    useEffect(() => {
        // Inicializando AOS no lado do cliente
        AOS.init({
            duration: 3000, // Duração do efeito de animação
        });
    }, []); // O array vazio [] garante que isso será executado apenas uma vez, após a montagem do componente

    return (
        <div >
            <Background

            />

            <div id="Projects" className="flex flex-col overflow-y-hidden items-center sm:justify-end max-w-4xl mx-auto rounded-lg text-white scroll-mt-[53px] mt-44 sm:p-8">
                <div className="flex flex-col " >
                    <motion.h1
                        className="text-4xl font-bold"
                        animate={{ opacity: 1, y: [0, -4, 0] }} // Aparece e gira para posição normal
                        transition={{ duration: 2, ease: "easeInOut", repeatType: "mirror", repeat: Infinity }}
                    >
                        My Projects
                    </motion.h1>
                    <p className="text-orange-600">Take a look at my personal projects!</p>


                </div>

                <div id="projects" className="grid grid-cols-2 w-full sm:flex-col group  ">
                    <ProjectCard
                        name="BigFort São Conrado"
                        description="Landing page desenvolvida a partir da necessidade da Farmácia BigFort São Conrado ter uma identidade própria."
                        imagePath="/images/Sorocaba - São Conrado SP.png"
                        technologies="React/NextJS"
                    />
                    <ProjectCard
                        name="Cadastro de Professores/ Fatec Votorantim"
                        description="O projeto foi criado para facilitar o cadastro de professores e disciplinas, atendendo a uma necessidade da secretaria acadêmica."
                        imagePath="/images/cadastroProfessores.png"
                        technologies="React/NextJS & Typescript"
                    />
                    <ProjectCard
                        name="Sol no Bolso"
                        description="Já pensou em um marketplace voltado a kit solares? Poder observar todos os preços das distribuidoras? Além de ferramentas que te auxiliam a instalar um kit, como por exemplo gerar informações conforme o telhado do cliente. Com a Sol no Bolso será possível!"
                        imagePath="/images/solNoBolso.png"
                        technologies="Java/Spring & React/Next"
                    />
                    <ProjectCard
                        name="LDS SOLAR Distribuidora"
                        description="Sistma que gerencia as vendas de uma distribuidora de energia solar. O sistema é capaz de gerar relatórios e controlar estoque"
                        imagePath="/images/lds.jpg"
                        technologies="React/NextJS & Typescript"
                    />
                </div>
            </div>
        </div>
    );
}
