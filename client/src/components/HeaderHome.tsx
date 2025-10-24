import logo from "../assets/webp/images/logo_j2bdev.webp";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function HeaderHome() {
  return (
    <>
      <header
        className=" py-10 md:py-14 border-b border-white/10 md:mb-20"
        id="accueil"
      >
        <div className="w-full mx-auto flex flex-col items-center md:justify-around md:flex-row px-6">
          <img src={logo} alt="Logo J2BDev" className="w-40 md:w-56 mb-3" />
          <h1 className=" text-neutral-400 sm:text-2xl lg:text-2xl text-center font-display font-semibold tracking-tight">
            Développeur front-end — React, TypeScript & Tailwind CSS
          </h1>
          <nav className="md:mt-0 text-sm-base space-x-2 gap-12 py-10">
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
            <a
              href="/CV_dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Mon CV
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
