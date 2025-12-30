import Header from "../../components/layout/Header";
import Hero from "../Home/components/Hero";
import Problems from "../Home/components/Problems";
import Solution from "../Home/components/Solutions";
import Process from "../Home/components/Process";
import Expertise from "../Home/components/Expertise";
import About from "../Home/components/About";
import Featured from "@/components/sections/Projects/CompletedProject";
import Contact from "../Home/components/Contact";
import Footer from "../../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="container">
          <Hero />

          <Problems />

          <Solution />

          <Featured />

          <Process />

          <Expertise />

          <About />

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
