import HeaderHome from "../components/HeaderHome";
import About from "../components/About";
import Skills from "../components/Skills";
import Featured from "../components/CompletedProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <div className="">
        <HeaderHome />
        <About />
      </div>
      <div className="py-10">
        <Skills />
      </div>
      <div className="py-10">
        <Featured />
      </div>
      <div className="py-10">
        <Contact />
      </div>
      <div className="py-10">
        <Footer />
      </div>
    </>
  );
}
