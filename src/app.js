const express = require('express');
const produtosRouter = require('./routes/produtos');

const app = express();
const PORT = 3000;

// Middleware: parse JSON
app.use(express.json());

// Middleware: log de requisições
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

// Rotas
app.use('/api/v1/produtos', produtosRouter);

// Middleware: erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: err.message || 'Erro interno do servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
