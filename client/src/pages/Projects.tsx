import TrainingProject from "../components/TrainingProject";
import HeaderProject from "../components/HeaderProject";
import AboutProject from "../components/AboutProject";
import CompletedProject from "../components/CompletedProject";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <section className="p-16">
      <HeaderProject />
      <AboutProject />
      <div className="py-16">
        <TrainingProject />
      </div>
      <div className="py-16">
        <CompletedProject />
      </div>
      <Footer />
    </section>
  );
}
