const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const contractController = require('./controllers/contractController');
const authMiddleware = require('./middleware/authMiddleware');
const adminMiddleware = require('./middleware/adminMiddleware');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.post('/api/auth/login', authController.login);
app.get('/api/users', authMiddleware, adminMiddleware, userController.getAllUsers);
app.get('/api/contracts/:empresa/:inicio', authMiddleware, adminMiddleware, contractController.getContracts);
app.get('/api/profile', authMiddleware, userController.getProfile);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
