import { Button } from "../../../components/ui/Button";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <>
      <section className="w-full h-[88vh] pt-30 relative">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-text-primary max-w-3xl mb-20">
            Des sites web performants, pensés avec vous, pour vos utilisateurs
          </h1>
          <p className="mb-10 max-w-2xl text-text-secondary leading-relaxed">
            J’accompagne les TPE et PME dans la création d’un site web qui
            reflète vraiment leur activité, leurs valeurs et leurs objectifs.
            WordPress ou React selon votre projet, avec une attention
            particulière portée à la performance, au SEO et à l’accessibilité.
          </p>
          <div className="flex justify-center md:justify-start">
            <HashLink to={"/#contact"}>
              <Button>Parlons de votre projet</Button>
            </HashLink>
          </div>
        </div>
        <div className="absolute text-text-muted bottom-10 right-150 hidden md:block">
          <p>↓</p>
        </div>
      </section>
    </>
  );
}
