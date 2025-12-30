import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/pages/Process/components/Hero";
import ProcessSteps from "@/pages/Process/components/ProcessSteps";
import Collab from "@/pages/Process/components/Collaboration";
import CTA from "@/pages/Process/components/CTACollab";

export default function Process() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col py-16 md:py-24 mx-auto max-w-6xl px-5 space-y-20">
        <Hero />
        <ProcessSteps />
        <Collab />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
