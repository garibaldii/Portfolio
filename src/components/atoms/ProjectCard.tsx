
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

interface ProjectCardProps {
    name: string,
    description?: string,
    imagePath?: string,
    footer?: string
}


export default function ProjectCard({
    name,
    description,
    imagePath,
    footer
}: ProjectCardProps) {
    return (
        <div >
            <Card className="bg-white/10 backdrop-blur-md">
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>

                <CardContent>
                    {imagePath ? (
                        <Image src={imagePath} alt={name} width={200} height={100} />
                    ) : (
                        <div>No image available</div> // Renderize algo alternativo caso a imagem esteja faltando
                    )}
                </CardContent>
                <CardFooter>
                    <p>{footer}</p>
                </CardFooter>
            </Card>
        </div>
    )
}
