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
        <div id="Knowledge" className="flex flex-col items-center text-white scroll-mt-[250px] mt-44 transition-all duration-300 sm:hover:bg-white/10 sm:hover:!opacity-100 sm:hover:shadow-md px-4">
            <Background />

            <motion.h1
                className="text-4xl font-bold mb-6"
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{ duration: 2, ease: "easeInOut", repeatType: "mirror", repeat: Infinity }}
            >
                Knowledge
            </motion.h1>

            <div className="max-w-3xl text-center space-y-6">
                <p className="text-lg text-orange-600">
                    Tenho experiência no desenvolvimento de aplicações FullStack, utilizando tecnologias modernas e boas práticas de desenvolvimento.
                </p>

                <div className="text-left space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Linguagens de Programação:</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Java, TypeScript e JavaScript – com foco em aplicações web, backend e desktop</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Frameworks e Bibliotecas:</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>React e Angular – criação de interfaces dinâmicas e escaláveis.</li>
                            <li>Next.js – desenvolvimento web otimizado para SEO e performance.</li>
                            <li>Spring Framework – aprendendo a desenvolver APIs robustas e escaláveis em Java.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Estilização:</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>TailwindCSS – criação de layouts modernos e responsivos.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Banco de Dados:</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>MySQL (relacional) e MongoDB (NoSQL) – modelagem de dados eficiente.</li>
                        </ul>
                    </div>
                </div>

                <p className="text-lg text-orange-600">
                    Busco diariamente evoluir minhas habilidades.
                </p>
            </div>

            <div className="flex mt-10 flex-wrap justify-center gap-6">
                <div id="languages" className="flex space-x-3">
                    <JavaIcon width={32} height={32} />
                    <TypescriptIcon width={32} height={32} />
                    <JavascriptIcon width={32} height={32} />
                </div>

                <div id="frameworks" className="flex space-x-3">
                    <ReactIcon width={32} height={32} />
                    <AngularIcon width={32} height={32} />
                    <NextIcon width={32} height={32} />
                    <TailwindIcon width={32} height={32} />
                </div>

                <div id="database" className="flex space-x-3">
                    <MySQLIcon width={32} height={32} />
                    <MongoDBIcon width={32} height={32} />
                </div>
            </div>
        </div>
    )
}
