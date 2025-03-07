"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon";
import { Label } from "../ui/label";
import SendButton from "../atoms/SendButton";


export default function Contact() {
    return (
        <div className="text-white text-center p-8 space-y-8" style={{ backgroundColor: "#292c2c" }}>
            <div>
                <h1 className="text-lg font-semibold text-orange-500">Contact</h1>


                <motion.h1
                    className="text-4xl font-bold"
                    animate={{ opacity: 1, y: [0, -4, 0] }} // Aparece e gira para posição normal
                    transition={{ duration: 2, ease: "easeInOut", repeatType: "mirror", repeat: Infinity }}
                >
                    Let's get started. 📲
                </motion.h1>






                <p className="mt-2 text-gray-300">Vamos conversar sobre sua demanda, comunique-se comigo!</p>

                <div className="flex flex-col items-center gap-3 mt-2">

                    <div id="social-medias" className="w-72">
                        <Button className="w-full flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105">
                            <motion.div
                                className="text-white hover:text-green-500"
                                transition={{ duration: 0.3, repeat: 1 }}
                            >
                                <WhatsappIcon  />
                            </motion.div>

                            Entre em contato via Whatsapp!
                        </Button>
                    </div>


                    <p className="text-gray-400">ou</p>

                    <div id="email" className="w-72 text-left space-y-2">


                        <SendButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
