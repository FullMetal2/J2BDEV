import user from "@/assets/photo.webp";
import user2 from "@assets/photo-1.webp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="max-w-6xl py-12 md:py-28 mx-auto sm:px-6 lg:px-8"
      >
        <h2 className="p-10 text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-12 text-center md:text-left">
          À Propos
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-around ">
          <img
            src={user}
            data-src={user2}
            alt="Portrait de Jean-Baptiste Bertron"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="rounded-xl shadow-lg max-w-70 md:max-w-xs lg:max-w-sm mx-auto md:mx-0 blur-sm transition-all duration-700 ease-out brightness-95"
            onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
          />
          <div className="max-w-xl flex flex-col justify-center">
            <h3 className="p-10 title-intro">
              Je m’appelle Jean-Baptiste Bertron,{" "}
              <motion.span
                initial={{ color: "rgb(229, 231, 235)" }}
                animate={{ color: "rgb(139, 92, 246)" }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  repeatType: "mirror",
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              >
                développeur web et webdesigner.
              </motion.span>
            </h3>

            <p className="p-10 text-base md:text-lg font-sans leading-relaxed text-gray-300">
              Basé à Perpignan j’accompagne les TPE et PME dans la création de
              sites web clairs, performants et alignés avec leur activité.
              J’accorde une grande importance à l’écoute, à la compréhension des
              besoins et à l’expérience utilisateur, afin de concevoir des
              interfaces utiles et durables. Je travaille principalement avec
              React, Tailwind CSS et WordPress, en veillant à la performance, au
              référencement (SEO) et à l’accessibilité.
            </p>
            <span className="p-10">
              J’aime travailler en étroite collaboration avec mes clients afin
              de créer un site qui leur ressemble vraiment.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
