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
        <div className="flex flex-col p-4 sm:w-[300px] h-auto sm:h-[350px] rounded-lg transition-all duration-300 
                        hover:rounded-2xl hover:bg-white/10 hover:!opacity-100 hover:shadow-md
                        group-hover:opacity-50 cursor-pointer text-white mx-auto">

            {/* Contêiner da Imagem */}
            <div className="w-full h-[120px] flex justify-center items-center overflow-hidden rounded-lg">
                {imagePath ? (
                    <Image
                        src={imagePath}
                        alt={name}
                        width={200}
                        height={120}
                        className="object-contain"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                        No image available
                    </div>
                )}
            </div>

            {/* Conteúdo do Projeto */}
            <div className="flex flex-col flex-1 justify-between mt-4">
                <CardTitle className="text-lg text-center">{name}</CardTitle>
                <CardDescription className="text-white overflow-y-auto max-h-24 line-clamp-4 px-2">
                    {description}
                </CardDescription>
                <p className="text-sm text-gray-400 text-center">{technologies}</p>
            </div>
        </div>
    );
}
