"use client"

import { Button } from "../ui/button";
import { Box } from "@mui/material";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import TypeWrited from "../molecules/TypeWrited";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon";
import Background from "../atoms/Background";


export default function Presentation() {
    return (




        <div id="AboutMe" className="flex flex-col mt-10 sm:flex-row items-center justify-between max-w-4xl mx-auto  text-white  sm:mt-44 ">


            {/* Texto */}
            <div className="sm:w-1/2">
                <h3 className="text-base sm:text-lg font-semibold">Hi I am</h3>
                <h1 className="text-xl sm:text-3xl font-bold">
                    <span className="text-orange-500">Matheus Garibaldi</span>
                </h1>




                <h2 className="text-2xl sm:text-5xl font-extrabold mt-2 ">Software Developer</h2>

                <div>

                </div>

               

                <div className=" h-[100px] overflow-hidden mt-5">
                    <TypeWrited
                        texts={["Sou Matheus Garibaldi, estudante de Desenvolvimento de Software Multiplataformas (FATEC Votorantim). Este portfólio reúne meus projetos, experiências e conhecimentos adquiridos em desenvolvimento FullStack. "]}
                        typeSpeed={15}
                    />


                </div>
            <p className="text-orange-600">A Tecnologia Move o Mundo - Steve Jobs 🍎</p>

            </div>

            {/* Imagem e Ícones Sociais */}
            <div className="sm:w-1/2 flex flex-col items-center">
                <Box
                    component="img"
                    src="/images/me.jpg"
                    alt="Matheus Garibaldi"
                    sx={{
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        boxShadow: 5,

                    }}
                />
                <div className="flex justify-center space-x-4 mt-4">
                    {/* Efeito de deslocamento e mudança de cor no WhatsApp */}
                    <WhatsappIcon className="w-6 h-6 text-gray-400 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#25d366]" />

                    {/* Efeito de deslocamento e mudança de cor no GitHub */}
                    <GithubIcon className="w-6 h-6 text-gray-400 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#ffffff]" />

                    {/* Efeito de deslocamento e mudança de cor no LinkedIn */}
                    <LinkedinIcon className="w-6 h-6 text-gray-400 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#93d9ff]" />

                    {/* Efeito de aumento e mudança de cor no Instagram */}
                    <InstagramIcon className="w-6 h-6 text-gray-400 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#E1306C]" />
                </div>

            </div>


        </div>

    );
}
