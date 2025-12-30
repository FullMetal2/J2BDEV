import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Hero from "./components/Hero";
import CTA from "./components/CTAProcess";
import CompletedProject from "../../components/sections/Projects/CompletedProject";
import TrainingProject from "../../components/sections/Projects/TrainingProject";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col py-8 md:py-8 mx-auto max-w-6xl px-5">
        <Hero />
        <CompletedProject />
        <TrainingProject />
        <CTA className="mt-16 md:mt-20" />
      </main>
      <Footer />
    </>
  );
}
