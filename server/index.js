import express from "express";
import * as db from "./database.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (_req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.post("/api/chamados", (req, res) => {
  const { titulo, resumo, prioridade, nome, clienteEmail } = req.body;

  if (!titulo || !resumo || !prioridade || !nome || !clienteEmail) {
    return res.status(400).json({ erro: "Campos obrigatórios: titulo, resumo, prioridade, nome, clienteEmail" });
  }
  if (!["critical", "high", "medium", "low"].includes(prioridade)) {
    return res.status(400).json({ erro: "prioridade deve ser: critical, high, medium ou low" });
  }

  const chamado = db.criar({ titulo, resumo, prioridade, nome, clienteEmail });
  res.status(201).json(chamado);
});

app.get("/api/chamados", (_req, res) => {
  res.json(db.listarTodos());
});

app.get("/api/chamados/abertos", (_req, res) => {
  res.json(db.listarAbertos());
});

app.get("/api/chamados/:id", (req, res) => {
  const chamado = db.buscarPorId(Number(req.params.id));
  if (!chamado) return res.status(404).json({ erro: "Chamado não encontrado" });
  res.json(chamado);
});

app.put("/api/chamados/:id", (req, res) => {
  const { titulo, resumo, prioridade, status } = req.body;

  if (status && !["aberto", "respondido"].includes(status)) {
    return res.status(400).json({ erro: "status deve ser: aberto ou respondido" });
  }
  if (prioridade && !["critical", "high", "medium", "low"].includes(prioridade)) {
    return res.status(400).json({ erro: "prioridade deve ser: critical, high, medium ou low" });
  }

  const chamado = db.atualizar(Number(req.params.id), { titulo, resumo, prioridade, status });
  if (!chamado) return res.status(404).json({ erro: "Chamado não encontrado" });
  res.json(chamado);
});

app.delete("/api/chamados/:id", (req, res) => {
  const ok = db.remover(Number(req.params.id));
  if (!ok) return res.status(404).json({ erro: "Chamado não encontrado" });
  res.json({ mensagem: "Chamado removido" });
});

app.listen(PORT, () => {
  console.log(`FixFlow API rodando em http://localhost:${PORT}`);
});
