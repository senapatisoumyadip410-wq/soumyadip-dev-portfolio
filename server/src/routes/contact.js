import { Router } from "express";
import Message from "../models/Message.js";

const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res, next) => {
  try {
    const { name, email, message } = req.body || {};
    if (![name, email, message].every(value => typeof value === "string")) {
      return res.status(400).json({ message: "Please provide your name, email and message." });
    }
    const clean = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    };
    if (clean.name.length < 2 || clean.name.length > 80) {
      return res.status(400).json({ message: "Name must be between 2 and 80 characters." });
    }
    if (!emailPattern.test(clean.email) || clean.email.length > 120) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }
    if (clean.message.length < 10 || clean.message.length > 2000) {
      return res.status(400).json({ message: "Message must be between 10 and 2000 characters." });
    }
    const saved = await Message.create(clean);
    return res.status(201).json({ message: "Message received.", id: saved._id });
  } catch (error) {
    next(error);
  }
});

export default router;
