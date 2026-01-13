import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient(); // ✅ just this, no adapter needed

const app = express();
const PORT = process.env.PORT || 2127;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cors({ origin: ['https://jossi-five.vercel.app', 'http://localhost:5173'], credentials: true }));

// Routes here

// POST /contact
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const contact = await prisma.contact.create({
      data: { name, email, message },
    });
    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// GET /contacts
app.get("/api/", async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/`);
});

// Health check endpoint for Render
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    message: 'Backend is running',
    timestamp: new Date().toISOString()
  });
});
