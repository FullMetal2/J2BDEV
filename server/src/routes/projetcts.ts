import { Router } from "express";
import { Project, projects } from "../data/projetcts.js";

const router = Router();

router.get("/", (req, res) => {
  const { search = "", tag } = req.query as { search?: string; tag?: string };
  let result = projects;
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  if (tag) {
    result = result.filter((p) =>
      p.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
    );
  }
  res.json({ items: result });
});

router.get("/:slug", (req, res) => {
  const item = projects.find((p) => p.slug === req.params.slug);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

export default router;
