import express from "express";
import { Ollama } from "ollama";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const ollama = new Ollama({ host: "http://ollama:11434" });

app.get("/healthy", (_req, res) => {
  res.send("Ok");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await ollama.chat({
      model: "llama3",
      messages: [{ role: "user", content: message }],
    });

    res.json(response.message.content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
});
