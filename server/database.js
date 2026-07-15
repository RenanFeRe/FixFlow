import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, "fixflow.json");

function read() {
  if (!existsSync(DB_PATH)) return [];
  return JSON.parse(readFileSync(DB_PATH, "utf-8"));
}

function write(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

let nextId = 1;

function init() {
  if (!existsSync(DB_PATH)) {
    write([]);
  }
  const data = read();
  nextId = data.length ? Math.max(...data.map(c => c.id)) + 1 : 1;
}

init();

export function listarTodos() {
  return read().sort((a, b) => b.data.localeCompare(a.data) || b.id - a.id);
}

export function listarAbertos() {
  return listarTodos().filter(c => c.status === "aberto");
}

export function buscarPorId(id) {
  return read().find(c => c.id === id) || null;
}

export function criar(dados) {
  const chamado = {
    id: nextId++,
    titulo: dados.titulo,
    resumo: dados.resumo,
    prioridade: dados.prioridade,
    nome: dados.nome,
    clienteEmail: dados.clienteEmail,
    data: new Date().toISOString().slice(0, 10),
    status: "aberto"
  };
  const data = read();
  data.push(chamado);
  write(data);
  return chamado;
}

export function atualizar(id, campos) {
  const data = read();
  const idx = data.findIndex(c => c.id === id);
  if (idx === -1) return null;
  for (const chave of ["titulo", "resumo", "prioridade", "status"]) {
    if (campos[chave] !== undefined) data[idx][chave] = campos[chave];
  }
  write(data);
  return data[idx];
}

export function remover(id) {
  const data = read();
  const idx = data.findIndex(c => c.id === id);
  if (idx === -1) return false;
  data.splice(idx, 1);
  write(data);
  return true;
}
