var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', async (req, res) => {
  let users = await userController.getAllUsers(req, res);
  res.json(users);
});

router.post('/', async (req, res) => {
  await userController.createUser(req, res);
});

module.exports = router;