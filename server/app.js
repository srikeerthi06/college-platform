const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// 🔥 GET ALL COLLEGES
app.get("/colleges", async (req, res) => {
  try {
    const colleges = await prisma.college.findMany();
    res.json(colleges);
  } catch (error) {
  console.error(error); // 👈 ADD THIS
  res.status(500).json({ error: error.message });
}
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
