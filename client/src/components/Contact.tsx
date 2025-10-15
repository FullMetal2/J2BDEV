import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
          form.current?.reset();
        },
        (error) => {
          console.log("Erreur :", error.text);
        }
      );
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
            initial={{ opacity: 0, x: -1000 }} // 🚀 départ sur le côté gauche
            whileInView={{ opacity: 1, x: 0 }} // 🎯 arrive au centre
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              duration: 1, // ⏱ vitesse
              ease: "easeOut", // 🧈 effet de fluidité
            }}
            className="flex flex-col gap-10"
          >
            <div className="relative input-box w-full">
              <input
                type="text"
                name="from_name"
                required
                placeholder="Nom"
                className="input w-full bg-white/5 border border-white/10 rounded-lg px-3 pt-2 py-2 text-gray-100 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 border:bg-white/10 transition"
              />
            </div>
            <div className="relative input-box w-full">
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="input w-full bg-white/5 border border-white/10 rounded-lg px-3 pt-2 py-2 text-gray-100 placeholder-gray-400
                   focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition"
              />
            </div>
            <div className="relative input-box w-full">
              <textarea
                name="message"
                placeholder="Votre message ..."
                className="input w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 min-h-32 text-gray-100 placeholder-gray-400
                   focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition"
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="bg-[#4f46e5] text-white px-4 py-2 rounded-lg hover:bg-[#4338ca] transition"
            >
              Envoyer
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
