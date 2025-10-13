import { useState } from "react";
import { api, type ApiError } from "../lib/api";
import { motion } from "framer-motion";

const appear = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: d },
  viewport: { once: true, amount: 0.25 },
});

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setFieldErrors({});
    try {
      await api.sendContact({ name, email, message });
      setStatus("✅ Message envoyé avec succès !");
      setName("");
      setEmail("");
      setMessage("");
    } catch (e: unknown) {
      const err = e as ApiError;
      const data = err.data as any;
      if (data?.error?.fieldErrors) {
        setFieldErrors(data.error.fieldErrors);
        setStatus("❌ Erreurs de validation.");
      } else {
        setStatus("❌ Erreur réseau.");
      }
    }
  }

  return (
    <>
      <section id="contact" className=" py-16 md:py-20  text-white rounded-2xl">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="flex justify-center mb-8 text-2xl md:text-3xl font-display font-semibold tracking-tight">
            Me contacter
          </h2>

          <form onSubmit={onSubmit} className="flex flex-col gap-10">
            <div className="relative input-box w-full">
              <motion.input
                type="text"
                required
                placeholder="Nom"
                {...appear(0)}
                className="input w-full bg-slate-800 border border-slate-700 rounded-lg px-3 pt-2 py-2 text-white
                     focus:outline-none focus:border-blue-500 transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {fieldErrors.name && (
              <p className="text-red-400 text-sm">
                {fieldErrors.name.join(", ")}
              </p>
            )}
            <div className="relative input-box w-full">
              <motion.input
                type="email"
                placeholder="Email"
                {...appear(0.1)}
                className="input w-full bg-slate-800 border border-slate-700 rounded-lg px-3 pt-2 py-2 text-white
                   focus:outline-none focus:border-blue-500 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {fieldErrors.email && (
              <p className="text-red-400 text-sm">
                {fieldErrors.email.join(", ")}
              </p>
            )}
            <div className="relative input-box w-full">
              <motion.textarea
                placeholder="Votre message ..."
                {...appear(0.2)}
                className="input w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 min-h-32 text-white
                   focus:outline-none focus:border-blue-500 transition"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {fieldErrors.message && (
              <p className="text-red-400 text-sm">
                {fieldErrors.message.join(", ")}
              </p>
            )}

            <motion.button
              type="submit"
              {...appear(0.3)}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400 transition"
            >
              Envoyer
            </motion.button>

            {status && <p className="mt-2">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
