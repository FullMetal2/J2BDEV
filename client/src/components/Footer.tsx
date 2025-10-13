import logo from "../assets/logo_j2bdev.webp";
import insta from "../assets/logo-reseaux/instagram.png";
import lk from "../assets/logo-reseaux/in.svg";
import git from "../assets/logo-skills/git.svg";
import arrow from "../assets/logo-skills/arrow-top.svg";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="md:py-20 text-neutral-300 rounded-2xl">
        <footer
          className="mx-auto max-w-6xl px-4 py-16
                  grid gap-8
                  sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="space-y-3">
            <img src={logo} alt="Logo J2BDev" className="h-8" />

            <div className="flex items-center gap-4">
              <a href="" className="opacity-80 hover:opacity-100">
                <img src={insta} alt="instagram" className="h-5 w-5" />
              </a>
              <a href="" className="opacity-80 hover:opacity-100">
                <img src={lk} alt="linkedin" className="h-5 w-5" />
              </a>
              <a href="" className="opacity-80 hover:opacity-100">
                <img src={git} alt="Git" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <span className="text-neutral-400">
              Mail:{" "}
              <a href="mailto: contacte@j2bdev.fr" className="cursor-pointer">
                contact@j2bdev.fr
              </a>
            </span>
            <p className="text-sm text-neutral-500">
              © 2025 J2BDev - Tous droits réservés{" "}
            </p>
            <p className="text-sm text-neutral-500">
              "Portfolio codé par moi-même (React / Tailwind)"
            </p>
          </div>
          <div>
            <h4 className="text-neutral-400 text-sm uppercase font-display tracking-wide">
              Navigation
            </h4>
            <nav className="space-y-2 lg:justify-self-end">
              <NavLink to="/">Accueil</NavLink> |{" "}
              <NavLink to="/projects">Projets</NavLink> |{" "}
              <HashLink to="/#contact">Contact</HashLink> |{" "}
              <a
                href="/Feedly.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Mon CV
              </a>
            </nav>
          </div>
          <div>
            <div className=" mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-500 flex items-center ">
              <button
                aria-label="Remonter"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="rounded-full border border-white/15 p-2 hover:bg-white/5 "
              >
                <img src={arrow} alt="Arrow-top" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
