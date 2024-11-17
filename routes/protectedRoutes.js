const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Exemplo de rota protegida
router.get('/admin', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acesso negado: apenas administradores' });
  }
  res.json({ message: 'Acesso autorizado para admins' });
});

module.exports = router;
