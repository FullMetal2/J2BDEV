import { Button } from "@/components/ui/Button";
import { HashLink } from "react-router-hash-link";

export default function CTA() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 pt-10">
        <HashLink to="/#contact">
          <Button>Parlons de votre projet</Button>
        </HashLink>

        <HashLink
          to="/#accueil"
          className="text-text-secondary hover:text-primary transition-colors text-sm"
        >
          ← Retour à l’accueil
        </HashLink>
      </section>
    </>
  );
}
