import { Button } from "../../../components/ui/Button";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <>
      <section className="w-full min-h-[90dvh] pt-30 relative">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-text-primary max-w-3xl mb-20">
            Des sites web clairs et efficaces pour indépendants et petites
            entreprises. Je m’occupe de votre site, vous vous concentrez sur
            votre activité.
          </h1>
          <p className="mb-10 max-w-2xl text-text-secondary leading-relaxed">
            Restaurateurs, artisans, coachs, indépendants : je vous accompagne
            dans la création, la refonte et la gestion de votre site web.
          </p>
          <div className="flex justify-center lg:justify-start mb-12 sm:md-20">
            <HashLink to={"/#contact"}>
              <Button>Parlons de votre projet</Button>
            </HashLink>
          </div>
        </div>
        <div className="absolute text-text-muted bottom-0 right-150 hidden lg:block">
          <p>↓</p>
        </div>
      </section>
    </>
  );
}
