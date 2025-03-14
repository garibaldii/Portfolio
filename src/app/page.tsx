"use client"

import Navbar from "@/components/organisms/Navbar";
import Presentation from "@/components/organisms/Presentation";
import Projects from "@/components/organisms/Projects";
import Knowledge from "@/components/organisms/Knowledge";
import Contact from "@/components/organisms/Contact";

import { motion } from "framer-motion"
import { ParticlesStar } from "@/components/background/ParticlesStarComponent";
import Background from "@/components/atoms/Background";


export default function Home() {




  return (
    <div className="relative">
      <ParticlesStar />
      <Navbar />

      <Background
        size={"10"}
      />
      <motion.div
        className="relative"
        animate={{ opacity: 1, y: [0, -3, 0] }} // Aparece e gira para posição normal
        transition={{ duration: 2, ease: "circInOut", repeatType: "mirror", repeat: Infinity }}
      >

        <div className="h-14" id="navbar-spacer" />
        <Presentation />
        <Projects />

        <Knowledge />
        <Contact />

      </motion.div >
    </div>
  );
}
