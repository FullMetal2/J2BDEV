import { Button } from "../ui/Button";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { AlignRight, X } from "lucide-react";

export default function MobileMenu({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/95 z-10 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: -40, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <button
              onClick={toggleMenu}
              className=" z-1 flex top-3 left-3 w-7 h-7 text-white hover:text-indigo-400 transition-colors mb-5 "
              aria-label="Ouvrir / fermer le menu"
            >
              {isOpen ? <X size={24} /> : <AlignRight size={24} />}
            </button>
            <nav className="flex flex-col gap-8 text-xl">
              <NavLink to="/" onClick={toggleMenu}>
                Accueil
              </NavLink>
              <NavLink to="/project" onClick={toggleMenu}>
                Projets
              </NavLink>
              <HashLink to="/#about" onClick={toggleMenu}>
                À propos
              </HashLink>
              <HashLink to="/#contact" onClick={toggleMenu}>
                Contact
              </HashLink>
            </nav>
            <div className="mt-10">
              <HashLink to="/#contact">
                <Button onClick={toggleMenu}>Me contacter</Button>
              </HashLink>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
