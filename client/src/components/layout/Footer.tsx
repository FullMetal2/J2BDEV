import logo from "../../assets/webp/images/logo_j2bdev.webp";
import insta from "../../assets/webp/logo-reseaux/instagram.svg";
import lk from "../../assets/webp/logo-reseaux/in.svg";
import git from "../../assets/webp/logo-skills/git.webp";
import arrow from "../../assets/webp/logo-skills/arrow-top.webp";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10  text-neutral-300 ">
        <section className="mx-auto max-w-6xl px-4 pt-4 flex flex-col gap-6 items-center text-center md:grid md:grid-cols-3 md:items-start md:text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <HashLink to="/#accueil">
                <img src={logo} alt="Logo J2BDev" className="h-8" />
              </HashLink>
              <a
                href="https://www.instagram.com/j2bdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >
                <img
                  src={insta}
                  alt="instagram"
                  className="h-5 w-5 bg-white rounded "
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-baptiste-bertron-26740438b"
                className="opacity-80 hover:opacity-100"
              >
                <img
                  src={lk}
                  alt="linkedin"
                  className="h-5 w-5 bg-white rounded"
                />
              </a>
              <a
                href="https://github.com/FullMetal2"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >
                <img src={git} alt="Git" className="h-5 w-5 bg-white rounded" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:text-left space-y-2 ">
            <p>
              Mail:{" "}
              <a
                href="mailto: contacte@j2bdev.fr"
                className="cursor-pointer inline-flex items-center px-3 py-1.5  rounded-md  text-sm  text-text-secondary  border border-white/10  hover:border-primary/40  hover:text-primary  transition-colors duration-200  mb-5"
              >
                contact@j2bdev.fr
              </a>
            </p>
          </div>

          <div>
            <nav className=" text-xs lg:justify-self-end">
              <NavLink to="/" className="link">
                Accueil
              </NavLink>
              <span className="p-2">·</span>
              <NavLink to="/project" className="link">
                Projets
              </NavLink>
              <span className="p-2">·</span>
              <HashLink to="/#contact" className="link">
                Contact
              </HashLink>
              <span className="p-2">·</span>
              <a
                href="/CV_dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Mon CV
              </a>
            </nav>
          </div>
        </section>
      </footer>
      <div className="w-full text-center text-xs text-neutral-500 py-5 space-x-3">
        <p>
          © 2025 J2BDev — Tous droits réservés — "Portfolio codé par moi-même
          (React / Tailwind)"
        </p>
        <p>
          <NavLink
            to="/mention"
            className="hover:text-primary transition-colors duration-200"
          >
            Mentions légales & Confidentialité
          </NavLink>
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-500 fixed z-5 bottom-0 right-0">
        <button
          aria-label="Remonter"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full border border-white/15 p-2 hover:bg-white/5 "
        >
          <img src={arrow} alt="Arrow-top" className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
