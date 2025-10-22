import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const isDesktop = window.innerWidth >= 1024;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_ID_SERVICE,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_KEY_PUBLIC
      )
      .then(
        () => {
          console.log("Message envoyé !");
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          setStatus("error");
          console.log("Erreur :", error.text);
        }
      );
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <>
      <section id="contact" className="md:py-20  text-white rounded-2xl">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="mb-8 text-2xl md:text-3xl text-center font-display font-semibold tracking-tight">
            Me contacter
          </h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: isDesktop ? -500 : 0 }} // 🚀 départ sur le côté gauche
            whileInView={{ opacity: 1, x: 0 }} // 🎯 arrive au centre
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              duration: 0.6, // ⏱ vitesse
              ease: "easeOut", // 🧈 effet de fluidité
            }}
            className="flex flex-col gap-10"
          >
            <div className="relative input-box w-full">
              <label htmlFor="from_name" className="sr-only">
                Nom
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                placeholder="Nom"
                className="input w-full bg-white/5 border border-white/10 rounded-lg px-3 pt-2 py-2 text-gray-100 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 border:bg-white/10 transition"
              />
            </div>
            <div className="relative input-box w-full">
              <label htmlFor="from_email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="Email"
                required
                className="input w-full bg-white/5 border border-white/10 rounded-lg px-3 pt-2 py-2 text-gray-100 placeholder-gray-400
                   focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition"
              />
            </div>
            <div className="relative input-box w-full">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Votre message ..."
                className="input w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 min-h-32 text-gray-100 placeholder-gray-400
                   focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition"
              />
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1 accent-indigo-500 cursor-pointer"
              />
              <label htmlFor="consent">
                J’accepte que mes données soient utilisées uniquement pour me
                recontacter dans le cadre de ce formulaire.
                <a
                  href="/mentions-legales"
                  className="text-indigo-400 hover:text-indigo-300 underline ml-1"
                >
                  En savoir plus
                </a>
              </label>
            </div>

            <button
              type="submit"
              value="Send"
              className="bg-[#4f46e5] text-white px-4 py-2 rounded-lg hover:bg-[#4338ca] transition"
            >
              Envoyer
            </button>
          </motion.form>
          {status === "success" && (
            <p className="mt-4 text-center"> ✅ Message envoyé avec succès !</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center">
              {" "}
              ❌ Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
