import Contact from "@/components/organisms/Contact";
import Knowledge from "@/components/organisms/Knowledge";
import Navbar from "@/components/organisms/Navbar";
import Presentation from "@/components/organisms/Presentation";
import Projects from "@/components/organisms/Projects";

export default function Home() {
  return (
    <div>

      <Navbar /> <div className="h-14" id="navbar-spacer" /> {/* espaçador da navbar */}

      <Projects/>
    </div>
  );
}
