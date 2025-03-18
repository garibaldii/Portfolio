import { motion } from "framer-motion"
import AngularIcon from "../../../assets/icons/AngularIcon"
import JavaIcon from "../../../assets/icons/JavaIcon"
import JavascriptIcon from "../../../assets/icons/JavascriptIcon"
import MongoDBIcon from "../../../assets/icons/MongoDBIcon"
import MySQLIcon from "../../../assets/icons/MySQLIcon"
import NextIcon from "../../../assets/icons/NextIcon"
import ReactIcon from "../../../assets/icons/ReactIcon"
import TailwindIcon from "../../../assets/icons/TailwindIcon"
import TypescriptIcon from "../../../assets/icons/TypescriptIcon"
import Background from "../atoms/Background"

export default function Knowledge() {
    return (
        <div id="Knowledge" className="flex flex-col items-center text-white scroll-mt-[250px] mt-44 transition-all duration-300 sm:hover:bg-white/10 sm:hover:!opacity-100 sm:hover:shadow-md">

            <Background
            />
            <motion.h1
                className="text-4xl font-bold"
                animate={{ opacity: 1, y: [0, -4, 0] }} // Aparece e gira para posição normal
                transition={{ duration: 2, ease: "easeInOut", repeatType: "mirror", repeat: Infinity }}
            >
                Knowledge
            </motion.h1>
            <p>Not a professional, but working hard everyday to make it</p>


            <div className="flex">
                <div id="languages" className="flex space-x-3">
                    <p className="w-8 h-8">
                        <JavaIcon width={32} height={32} />
                    </p>
                    <p className="w-8 h-8">
                        <TypescriptIcon width={32} height={32} />
                    </p>
                    <p className="w-8 h-8">
                        <JavascriptIcon width={32} height={32} />
                    </p>
                </div>

                <div id="frameworks" className="flex space-x-3 ml-4">
                    <p className="w-8 h-8">
                        <ReactIcon width={32} height={32} />
                    </p>
                    <p className="w-8 h-8">
                        <AngularIcon width={32} height={32} />
                    </p>
                    <p className="w-8 h-8">
                        <NextIcon width={32} height={32} />
                    </p>
                    <p className="w-8 h-8">
                        <TailwindIcon width={32} height={32} />
                    </p>
                </div>

                <div id="database" className="flex space-x-3 ml-4">
                    <p className="w-8 h-8">
                        <MySQLIcon width={32} height={32} />
                    </p>
                    <p className="w-8 h-8">
                        <MongoDBIcon width={32} height={32} />
                    </p>
                </div>
            </div>
        </div>

    )
}