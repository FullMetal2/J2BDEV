import logo from "../assets/webp/images/logo_j2bdev.webp";
import insta from "../assets/webp/logo-reseaux/instagram.webp";
import lk from "../assets/webp/logo-reseaux/in.webp";
import git from "../assets/webp/logo-skills/git.webp";
import arrow from "../assets/webp/logo-skills/arrow-top.webp";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="border-t  border-white/10 md:py-20  text-neutral-300 ">
        <section
          className=" pt-4 mx-auto max-w-6xl px-4
                  grid gap-8
                  sm:grid-cols-2 lg:grid-cols-3 justify-items-center relative"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Logo J2BDev" className="h-8" />
              <a
                href="https://www.instagram.com/fullmetal269/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >
                <img src={insta} alt="instagram" className="h-5 w-5" />
              </a>
              <a
                href="www.linkedin.com/in/jean-baptiste-bertron-26740438b"
                className="opacity-80 hover:opacity-100"
              >
                <img src={lk} alt="linkedin" className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/FullMetal2"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >
                <img src={git} alt="Git" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:text-left space-y-2 ">
            <p>
              Mail:{" "}
              <a href="mailto: contacte@j2bdev.fr" className="cursor-pointer">
                contact@j2bdev.fr
              </a>
            </p>
            <p className="text-sm text-neutral-500">
              © 2025 J2BDev - Tous droits réservés
            </p>
            <p className="text-sm text-neutral-500">
              "Portfolio codé par moi-même (React / Tailwind)"
            </p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-sm uppercase text-center font-display tracking-wide">
              Navigation
            </h3>{" "}
            <br />
            <nav className="space-y-2 lg:justify-self-end">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Accueil
              </NavLink>{" "}
              |{" "}
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Projets
              </NavLink>{" "}
              | <HashLink to="/#contact">Contact</HashLink> |{" "}
              <a href="" target="_blank" rel="noopener noreferrer" className="">
                Mon CV
              </a>
            </nav>
          </div>
        </section>
      </footer>

      <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-500 fixed z-50 bottom-0 right-0">
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
