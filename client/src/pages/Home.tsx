import HeaderHome from "../components/HeaderHome";
import About from "../components/About";
import Skills from "../components/Skills";
import Featured from "../components/FeaturedProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-30">
        <HeaderHome />
        <About />
        <Skills />
        <Featured />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
