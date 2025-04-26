"use client"

import Navbar from "@/components/organisms/Navbar";
import Presentation from "@/components/organisms/Presentation";
import Projects from "@/components/organisms/Projects";
import Contact from "@/components/organisms/Contact";

import { motion } from "framer-motion"
import Knowledge from "@/components/organisms/Knowledge";


export default function Home() {




  return (
    <div className="relative overflow-x-hidden  overflow-y-hidden p-3 bg-black">
      <Navbar />  

      <motion.div
        className="relative"
        animate={{ opacity: 1, y: [0, - 0.0000001, 0] }} // Aparece e gira para posição normal
        transition={{ duration: 2, ease: "circInOut", repeatType: "mirror", repeat: Infinity }}
      >
        

        <div className="h-14" id="navbar-spacer" />
        <Presentation />
        <Projects />

        <Knowledge/>
        <Contact />

      </motion.div >
    </div>
  );
}
