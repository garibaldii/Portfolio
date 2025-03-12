import Background from "@/components/atoms/Background";
import Contact from "@/components/organisms/Contact";
import Knowledge from "@/components/organisms/Knowledge";
import Navbar from "@/components/organisms/Navbar";
import Presentation from "@/components/organisms/Presentation";
import Projects from "@/components/organisms/Projects";

export default function Home() {
  return (

      <div className="bg-black">
        {/* Coloque o Background aqui para que ele fique no fundo */}
        <Navbar />
        <div className="h-14" id="navbar-spacer" />
        <Presentation />
        <Projects />
        <Knowledge />
        <Contact />
      </div>

  );
}
