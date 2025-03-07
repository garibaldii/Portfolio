import { Button } from "../ui/button";
import { Box } from "@mui/material";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import TypeWrited from "../molecules/TypeWrited";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon";



export default function Presentation() {
    return (
        <div className="flex items-center justify-between max-w-4xl mx-auto p-8  rounded-lg">




            {/* Texto */}
            <div className="w-1/2">
                <h3 className="text-lg font-semibold">Hi I am</h3>
                <h1 className="text-3xl font-bold">
                    <span className="text-orange-500">Matheus Garibaldi</span>
                </h1>




                <h2 className="text-5xl font-extrabold mt-2 ">Software Developer</h2>

                <div className=" h-[100px] overflow-hidden mt-5">
                    <TypeWrited
                        texts={["Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in Aliquet donec morbi convallis pretium. Turpis tempus pharetra"]}
                        typeSpeed={15}
                    />
                </div>
                <Button className="mt-6 py-3 text-white font-bold rounded-md">
                    Hire Me
                </Button>
            </div>

            {/* Imagem e Ícones Sociais */}
            <div className="w-1/2 flex flex-col items-center">
                <Box
                    component="img"
                    src="/me.png"
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
                    <WhatsappIcon className="w-6 h-6 text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#25d366]" />

                    {/* Efeito de deslocamento e mudança de cor no GitHub */}
                    <GithubIcon className="w-6 h-6 text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#000000]" />

                    {/* Efeito de deslocamento e mudança de cor no LinkedIn */}
                    <LinkedinIcon className="w-6 h-6 text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#0077b5]" />

                    {/* Efeito de aumento e mudança de cor no Instagram */}
                    <InstagramIcon className="w-6 h-6 text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:text-[#E1306C]" />
                </div>

            </div>
        </div>
    );
}
