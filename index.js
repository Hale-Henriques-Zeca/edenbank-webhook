require("dotenv").config();
const express = require("express");
const app = express();

// Necessário para o Moralis enviar JSON
app.use(express.json({ limit: "5mb" }));

// Endpoint base
app.get("/", (req, res) => {
  res.send("EBC Engine Webhook Online ✓");
});

// Endpoint exigido pela Moralis
app.post("/moralis", async (req, res) => {
  console.log("📩 Evento recebido da Moralis:");
  console.log(JSON.stringify(req.body, null, 2));

  // SEMPRE responder 200 rapidamente
  res.status(200).send("OK");
});

// Porta Render
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log("🚀 Webhook ativo na porta", PORT);
});
