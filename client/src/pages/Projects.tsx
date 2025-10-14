import TrainingProject from "../components/TrainingProject";
import HeaderProject from "../components/HeaderProject";
import AboutProject from "../components/AboutProject";
import CompletedProject from "../components/CompletedProject";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <section>
      <div className="">
        <HeaderProject />
        <AboutProject />
      </div>
      <div className="py-10">
        <TrainingProject />
      </div>
      <div className="py-10">
        <CompletedProject />
      </div>
      <Footer />
    </section>
  );
}
