const rescue = require('express-rescue');
const UserModel = require('../model/UserModel');
const UserService = require('../services/UserService');

const createSearchResults = rescue(async (req, res) => {
  const productsList = req.body;

  const prods = await UserService.createSearchResults(productsList);

  return res.status(201).json(prods);
});

const findAllResearches = rescue(async (_req, res) => {
  const prods = await UserModel.findAllResearches();

  return res.status(200).json(prods);
}); 

module.exports = {
  createSearchResults,
  findAllResearches,
};
