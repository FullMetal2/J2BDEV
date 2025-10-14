import logo from "../assets/webp/images/logo_j2bdev.webp";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import booki from "../assets/webp/thumbs/booki.webp";

export default function HeaderHome() {
  return (
    <>
      <header
        className=" py-10 md:py-14 border-b border-white/10 md:mb-20 flex flex-col items-center justify-between md:flex-row"
        id="accueil"
      >
        <img src={booki} alt="Booki" />
        <img src={logo} alt="Logo J2BDev" className="w-40 md:w-56 mb-3" />
        <h1 className=" text-neutral-400 sm:text-2xl lg:text-2xl text-center font-display font-semibold tracking-tight">
          Développeur web full-stack — React, Node, TypeScript
        </h1>
        <nav className="md:mt-0 text-sm-base space-x-2 gap-12 py-10">
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
      </header>
    </>
  );
}
