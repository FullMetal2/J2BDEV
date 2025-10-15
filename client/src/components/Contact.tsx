import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const appear = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: d },
  viewport: { once: true, amount: 0.25 },
});

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("ID_SERVICE", "TEMPLATE_ID", form.current, {
        publicKey: "KEY_PUBLIC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
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

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-10"
          >
            <div className="relative input-box w-full">
              <label>Nom</label>
              <motion.input
                type="text"
                name="from_name"
                required
                placeholder="Nom"
                {...appear(0)}
                className="input w-full bg-slate-800 border border-slate-700 rounded-lg px-3 pt-2 py-2 text-white
                     focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="relative input-box w-full">
              <motion.input
                type="email"
                name="from_email"
                placeholder="Email"
                {...appear(0.1)}
                className="input w-full bg-slate-800 border border-slate-700 rounded-lg px-3 pt-2 py-2 text-white
                   focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="relative input-box w-full">
              <motion.textarea
                name="message"
                placeholder="Votre message ..."
                {...appear(0.2)}
                className="input w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 min-h-32 text-white
                   focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <motion.button
              type="submit"
              value="Send"
              {...appear(0.3)}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400 transition"
            >
              Envoyer
            </motion.button>
          </form>
        </div>
      </section>
    </>
  );
}
