import MobileMenu from "./MobileMenu";
import logo from "../../assets/webp/images/logo_j2bdev.webp";
import { Button } from "../ui/Button";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { AlignRight, X } from "lucide-react";

export default function HeaderHome() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <header
        className="pt-2.5 border-b border-white/10 md:mb-20 h-15 relative"
        id="accueil"
      >
        <div className="w-full mx-auto flex flex-col items-center text-text-muted md:justify-around md:flex-row px-6 h-10">
          <img src={logo} alt="Logo J2BDev" className="w-15 md:w-15" />

          <nav className="hidden md:flex">
            <NavLink to="/" className="link">
              Accueil
            </NavLink>
            <span className="pr-15"></span>
            <NavLink to="/project" className="link">
              Projets
            </NavLink>
            <span className="pr-15"></span>
            <HashLink to="/#about" className="link">
              À propos
            </HashLink>
            <span className="pr-15"></span>
            <HashLink to="/#contact" className="link">
              Contact
            </HashLink>
          </nav>
          <HashLink to="/#contact" className="hidden md:flex">
            <Button>Me contacter</Button>
          </HashLink>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X size={24} />
            ) : (
              <AlignRight
                size={24}
                className="absolute top-3 right-3 w-7 h-7 hover:text-indigo-400 transition-colors p-2 rounded-lg border border-white/10 hover:bg-white/5 backdrop-blur-sm"
              />
            )}
          </button>
        </div>
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
}
