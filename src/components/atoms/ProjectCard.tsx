import { CardTitle, CardDescription } from "../ui/card";
import Image from "next/image";

interface ProjectCardProps {
    name: string;
    description?: string;
    imagePath?: string;
    technologies?: string;
}

export default function ProjectCard({
    name,
    description,
    imagePath,
    technologies
}: ProjectCardProps) {
    return (
        <div className="flex w-full items-center p-4 rounded-lg  transition-all duration-300 
                        hover:rounded-2xl hover:bg-white/10 hover:!opacity-100 hover:shadow-md
                        group-hover:opacity-50 cursor-pointer text-white">

            {/* Contêiner da Imagem */}
            <div className="w-1/4 h-full overflow-hidden rounded-lg ">
                {imagePath ? (
                    <Image
                        src={imagePath}
                        alt={name}
                        width={200}
                        height={2}
                        className="object-contain "
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                        No image available
                    </div>
                )}
            </div>

            {/* Conteúdo do Projeto */}
            <div className="flex-1 pl-7">
                <CardTitle >{name}</CardTitle>
                <CardDescription className="text-white">{description}</CardDescription>
                <p className="text-sm text-gray-600">{technologies}</p>
            </div>

        </div>
    );
}
