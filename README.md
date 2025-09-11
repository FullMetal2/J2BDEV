# J2BDev – Portfolio (Monorepo) (TS front + TS back)

Front React + Vite + TypeScript + Tailwind v4
Back Node + Express + TypeScript (ES Modules)

Structure
J2BDEV/
client/ # Front (React/Vite/TS/Tailwind)
src/
index.html
tailwind.config.js
postcss.config.js
server/ # Back (Node/Express/TS ESM)
src/
index.ts
tsconfig.json
README.md

Prérequis

Node.js ≥ 18 (idéalement 20/22)

npm ≥ 9

Scripts utiles
Front (client)
cd client
npm install
npm run dev # http://localhost:5173
npm run build # build production -> dist/

Back (server)
cd server
npm install
npm run dev # lance l'API en dev via tsx (watch)
npm run build # compile TS -> dist/
npm start # démarre l'API depuis dist/ (prod)

Endpoints de test

API healthcheck : GET http://localhost:4000/health → { "ok": true }

Config principale
Tailwind v4 (client)

postcss.config.js

export default {
plugins: {
'@tailwindcss/postcss': {},
autoprefixer: {},
},
}

tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
export default {
content: ["./index.html","./src/**/\*.{js,ts,jsx,tsx}"],
theme: { extend: {} },
plugins: [],
}

src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

TypeScript ESM (server)

server/package.json

{
"type": "module",
"scripts": {
"dev": "tsx watch src/index.ts",
"build": "tsc -p .",
"start": "node dist/index.js"
}
}

server/tsconfig.json

{
"compilerOptions": {
"target": "ES2022",
"module": "NodeNext",
"moduleResolution": "NodeNext",
"rootDir": "src",
"outDir": "dist",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,
"types": ["node"]
},
"include": ["src"]
}

server/src/index.ts (mini API)

import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
app.use(helmet());
app.use(cors({ origin: ["https://www.j2bdev.fr","https://j2bdev.fr","http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/health", (\_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => console.log(`API up on :${PORT}`));

Variables d’environnement
Front (Vercel)

VITE_API_URL=https://api.j2bdev.fr

Back (Render)

CORS_ORIGIN=https://www.j2bdev.fr,https://j2bdev.fr

(plus tard) DATABASE_URL, JWT_SECRET, etc.

Déploiement
Front → Vercel

Add Project → Root Directory = client/

Build: npm run build • Output: dist

Domaines : j2bdev.fr + www.j2bdev.fr

Primary sur www.j2bdev.fr (redir apex → www)

API → Render

New Web Service → Root Directory = server/

Build: npm run build • Start: npm start

Domaine custom : api.j2bdev.fr (CNAME Render)

DNS (gérer tout chez Vercel + garder mails OVH)

Avant de changer les nameservers dans OVH → noter les MX/SPF existants.

Dans Vercel → DNS Records → recréer :

MX @ 10 mx1.mail.ovh.net.
MX @ 20 mx2.mail.ovh.net.
MX @ 30 mx3.mail.ovh.net.
MX @ 40 mx4.mail.ovh.net.
TXT @ "v=spf1 include:mx.ovh.com ~all"

Basculer les nameservers OVH → Vercel.

Ajouter CNAME api -> <ton-service>.onrender.com.

Checklist “Go Live”

client : npm run build OK, page maintenance visible en local

server : npm run dev OK, GET /health → { ok: true }

Vercel déploie le front (\*.vercel.app OK)

DNS migré vers Vercel, mails OK (MX/SPF recopiés)

api.j2bdev.fr → CNAME Render

VITE_API_URL configurée côté front

Dépannage rapide

npx tailwindcss init -p échoue → créer tailwind.config.js et postcss.config.js à la main (voir plus haut).

Erreur PostCSS “use @tailwindcss/postcss” → installer @tailwindcss/postcss et mettre à jour postcss.config.js.

ESM import issues → t’assures "type": "module" + module: "NodeNext".

CORS → origin doit contenir tes domaines exacts (https://www.j2bdev.fr, https://j2bdev.fr).

DNS → si mail KO après migration : re-vérifier MX/SPF sur Vercel DNS.

Licence

Personnel – Portfolio J2BDev.
