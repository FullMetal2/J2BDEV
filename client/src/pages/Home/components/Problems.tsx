import { motion } from "framer-motion";
import { AlertTriangle, XCircle, Hourglass } from "lucide-react";

export default function Problems() {
  return (
    <>
      <section className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-12 text-center md:text-left">
          Un site web qui ne vous ressemble plus
        </h2>
        <h3 className="text-sm md:text-lg font-medium tracking-tight text-text-secondary mb-8 text-center md:text-left">
          Beaucoup d’entreprises disposent aujourd’hui d’un site web sans qu’il
          réponde réellement à leurs besoins ni à ceux de leurs clients.
        </h3>
        <motion.ul className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.li
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-5 card-problems"
          >
            <div className="flex gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <h5 className="pb-4">
                <strong>Un site qui ne reflète plus votre activité</strong>
              </h5>
            </div>
            <p>
              Votre site ne correspond plus à votre image, vos valeurs ni à
              votre façon de travailler.
            </p>
          </motion.li>
          <motion.li
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-5 card-problems"
          >
            <div className="flex gap-2">
              <XCircle className="h-5 w-5 text-primary" />
              <h5 className="pb-4">
                <strong>Un message flou ou incompris</strong>
              </h5>
            </div>
            <p>
              Les visiteurs ne comprennent pas rapidement ce que vous proposez
              ni pourquoi vous contacter
            </p>
          </motion.li>
          <motion.li
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-5 card-problems lg:col-span-2 lg:mx-auto lg:max-w-lg"
          >
            <div className="flex gap-2">
              <Hourglass className="h-5 w-5 text-primary" />
              <h5 className="pb-4">
                <strong>
                  Un site lent, confus ou mal pensé fait fuir vos visiteurs.
                </strong>
              </h5>
            </div>
            <p>
              Les visiteurs abandonnent, l’image de votre activité en souffre,
              et des opportunités sont perdues.
            </p>
          </motion.li>
        </motion.ul>
      </section>
    </>
  );
}
