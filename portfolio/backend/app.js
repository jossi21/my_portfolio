import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";  

dotenv.config();        

const prisma = new PrismaClient();
const app = express();  
const PORT = process.env.PORT || 2127;

// CORS Configuration for production
const corsOptions = {   
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'https://jossi-five.vercel.app',
      'http://localhost:5173',
      'http://localhost:3000'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,    
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint (required by Render)   
app.get("/api/health", async (req, res) => {    
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),      
      service: "jossi-backend-api",
      database: "connected",
      frontend: process.env.FRONTEND_URL || "not set",
      environment: process.env.NODE_ENV || "development"
    });
  } catch (error) {     
    res.status(500).json({
      status: "unhealthy",
      error: error.message,
      timestamp: new Date().toISOString(),      
    });
  }
});

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

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Jossi Backend API",
    version: "1.0.0",
    endpoints: {
      health: "GET /api/health",
      contact: "POST /api/contact",
      contacts: "GET /api/"
    },
    documentation: "https://jossi-five.vercel.app"
  });
});

app.listen(PORT, () => {
  console.log(`Ì∫Ä Server running on port ${PORT}`);
  console.log(`Ìºê Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Ì¥ó Health check: http://localhost:${PORT}/api/health`);
});       
