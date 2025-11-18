import express from "express";
import OpenAI from "openai";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const client = new OpenAI({
  apiKey: "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"
});

app.post("/api/chat", async (req, res) => {
  const userText = req.body.input;

  try {
    const completion = await client.responses.create({
      model: "gpt-5-nano",
      input: userText
    });

    res.json({ response: completion.output_text });

  } catch (err) {
    console.error(err);
    res.json({ response: "Erro no servidor" });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
