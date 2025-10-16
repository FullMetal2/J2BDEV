import logo from "../assets/webp/images/logo_j2bdev.webp";
import { NavLink } from "react-router-dom";

export default function HeaderProject() {
  return (
    <>
      <header
        id="accueil"
        className="py-10 md:py-14 border-b border-white/10 md:mb-20"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between md:flex-row px-6">
          <img src={logo} alt="Logo J2BDev" className="w-40 md:w-56 mb-3" />
          <h1 className=" text-neutral-400 sm:text-2xl lg:text-2xl text-center font-display font-semibold tracking-tight">
            Mes projets
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
            |{" "}
            <a href="" target="_blank" rel="noopener noreferrer" className="">
              Mon CV
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
