let userModel = require('../models/user-model');
let userValidator = require('../validators/user-validator');

const getAllUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.send(users);
};

const createUser = async (req, res) => {
  const user = req.body;
  const errors = userValidator.validateUserForPost(user);
  if (errors.length > 0) {
    res.status(400).json({
      'status': 'validation error',
      'errors': errors,
    });
    return;
  }

  const result = await userModel.createUser(user);
  const success = result && result.acknowledged;
  if (success) {
    res.status(201).json({
      'status': 'user created successfully',
      'id': result.insertedId,
    });
  } else {
    res.status(500).json({
      'status': 'failed to create user',
    });
  }
};

module.exports = { getAllUsers, createUser };