import { motion } from "framer-motion";

export default function ProcessSteps() {
  return (
    <>
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center md:text-left mb-6">
          Un chemin clair, étape par étape
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 01 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-white/10 bg-black/30"
          >
            <small className="text-primary tracking-widest">
              01 — découverte
            </small>
            <h3 className="mt-2 mb-3">Comprendre & écouter</h3>
            <p className="text-text-secondary">
              On échange ensemble. Je m’imprègne de votre activité, vos valeurs,
              vos besoins et vos objectifs afin de cerner ce qui vous rend
              unique.
            </p>
          </motion.div>

          {/* 02 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-white/10 bg-black/30"
          >
            <small className="text-primary tracking-widest">
              02 — conception
            </small>
            <h3 className="mt-2 mb-3">Structurer & clarifier</h3>
            <p className="text-text-secondary">
              Je structure votre site pour qu’il soit clair, utile et cohérent.
              On valide ensemble avant de passer au développement.
            </p>
          </motion.div>

          {/* 03 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-white/10 bg-black/30"
          >
            <small className="text-primary tracking-widest">
              03 — développement
            </small>
            <h3 className="mt-2 mb-3">Construire & optimiser</h3>
            <p className="text-text-secondary">
              Je développe votre site étape par étape en veillant à la
              performance, à l’accessibilité et à l’expérience utilisateur.
            </p>
          </motion.div>

          {/* 04 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-white/10 bg-black/30"
          >
            <small className="text-primary tracking-widest">04 — suivi</small>
            <h3 className="mt-2 mb-3">Finaliser & accompagner</h3>
            <p className="text-text-secondary">
              Votre site est mis en ligne avec soin. Je reste disponible par la
              suite pour que votre site évolue avec vous.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
