import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Endpoint para Moralis Streams
app.post("/moralis/webhook", (req, res) => {
    console.log("🔥 NOVO EVENTO RECEBIDO DO MORALIS:");
    console.log(JSON.stringify(req.body, null, 2));

    // Confirmar recebimento
    res.status(200).send("OK");
});

app.get("/", (req, res) => {
    res.send("EBC Engine Webhook Online ✔");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Webhook ativo na porta ${PORT}`);
});
