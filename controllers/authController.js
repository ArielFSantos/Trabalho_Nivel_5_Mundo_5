const jwtService = require('../services/jwtService');
const userModel = require('../models/userModel');

exports.login = (req, res) => {
  const credentials = req.body;
  const user = userModel.findUser(credentials);

  if (user) {
    const token = jwtService.generateToken(user.id, user.perfil);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
