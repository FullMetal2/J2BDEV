import express from "express";
import { contactSchema } from "../lib/validate.js";
import * as z from "zod";

const router = express.Router();

router.post("/", (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    const flat = z.flattenError(parsed.error);
    return res.status(400).json({ error: flat });
  }

  const { name, email, message } = parsed.data;
  // MVP: log + TODO: send mail / save DB
  console.log("Contact : ", {
    name,
    email,
    message: message.slice(0, 200) + "...",
  });
  res.status(201).json({ ok: true });
});

export default router;
