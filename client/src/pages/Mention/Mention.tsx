import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Mentions from "@/pages/Mention/components/Mention";
import Confidentialité from "@/pages/Mention/components/Confidentialite";
import { NavLink } from "react-router-dom";

export default function Mention() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-20 space-y-24">
          <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl">
            Mentions légales & Politique de confidentialité
          </h1>
          <Mentions />
          <hr className="border-white/10" />
          <Confidentialité />
          <div className="mt-10 flex justify-around">
            <NavLink
              to="/"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
               text-text-secondary border border-white/15
               hover:text-primary hover:border-primary/40
               transition-colors duration-200"
            >
              ← Retour à l’accueil
            </NavLink>
            <a
              href="/#contact"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
               text-text-secondary border border-white/15
               hover:text-primary hover:border-primary/40
               transition-colors duration-200"
            >
              Me contacter →
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
