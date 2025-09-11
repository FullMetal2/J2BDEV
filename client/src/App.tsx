import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function Maintenance() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-slate-100 p-6">
      <main className="w-full max-w-lg text-center">
        <div className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-amber-400 mr-2 animate-pulse" />
          <span className="text-sm text-slate-300">Maintenance en cours</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          J2BDev revient bientôt ✨
        </h1>
        <p className="text-slate-300 mb-8">
          Je prépare une nouvelle version de mon portfolio (React + Node).\n
          Merci pour votre patience.
        </p>

        <div className="relative h-2 w-full rounded-full bg-slate-800 overflow-hidden mb-8">
          <div className="absolute inset-y-0 left-0 w-1/3 animate-[loading_1.6s_ease-in-out_infinite] bg-gradient-to-r from-amber-400/20 via-amber-400/70 to-amber-400/20" />
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-slate-400">
          <p>
            Besoin de me joindre ?
            <a
              href="mailto:contact@j2bdev.fr"
              className="ml-1 underline decoration-dotted underline-offset-4 hover:text-slate-200"
            >
              contact@j2bdev.fr
            </a>
          </p>
          <p>
            Suivez l'avancement sur
            <a
              href="https://github.com/J2BDev"
              target="_blank"
              rel="noreferrer"
              className="ml-1 underline decoration-dotted underline-offset-4 hover:text-slate-200"
            >
              GitHub
            </a>
          </p>
        </div>
      </main>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-40%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </div>
  );
}
