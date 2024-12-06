let client = require('../db-connection');
let collection = client.db().collection('user');

const getAllUsers = async () => {
  return await collection.find().toArray();
};

const createUser = async (user) => {
  return await collection.insertOne(user); // insert data into database
};

module.exports = { getAllUsers, createUser };