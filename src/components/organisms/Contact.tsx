"use client"

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon";
import SendButton from "../atoms/SendButton";
import Background from "../atoms/Background";


export default function Contact() {
    return (
        <div id="Contact" className="text-white text-center p-8 space-y-8 mt-44 transition-all duration-300 sm:hover:bg-white/10 sm:hover:shadow-md">

            <div>
                <h1 className="text-lg font-semibold text-orange-500">Contact</h1>



                <motion.h1
                    className="text-4xl font-bold"
                    animate={{ opacity: 1, y: [0, -4, 0] }} // Aparece e gira para posição normal
                    transition={{ duration: 2, ease: "easeInOut", repeatType: "mirror", repeat: Infinity }}
                >
                    Let&apos;ts get started. 📲
                </motion.h1>






                <p className="mt-2 text-gray-300">Vamos conversar sobre sua demanda, comunique-se comigo!</p>

                <div className="flex flex-col items-center gap-3 mt-2">

                    <div id="social-medias" className="w-72">
                        <Button className="w-full bg-green-500 flex items-center justify-center gap-2  transition-all duration-300 hover:bg-green-600">
                            <motion.div
                                className="text-white"
                                transition={{ duration: 0.3, repeat: 1 }}
                            >
                                <WhatsappIcon />
                            </motion.div>

                            Entre em contato via Whatsapp!
                        </Button>
                    </div>


                    <p className="text-gray-400">ou</p>

                    <div id="email" className="w-72 text-left space-y-2 z-10">


                        <SendButton />
                        <Background

                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
