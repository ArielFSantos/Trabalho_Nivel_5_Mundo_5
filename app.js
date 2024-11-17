const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const { port } = require('./config');

const app = express();
app.use(bodyParser.json());
const protectedRoutes = require('./routes/protectedRoutes');

app.use('/api', protectedRoutes);


// Rotas
app.use('/api/auth', authRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
