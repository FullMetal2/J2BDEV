import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import projectsRouter from "./routes/projetcts.js";

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: [
      "https://www.j2bdev.fr",
      "https://j2bdev.fr",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/projects", projectsRouter);

app.get("/health", (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => console.log(`API up on :${PORT}`));
