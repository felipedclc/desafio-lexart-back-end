const UserModel = require('../model/UserModel');

const createSearchResults = async (productsList) => {
  const formated = [];
    Object.values(productsList)
      .forEach(({ thumbnail, title, price, category_id: categoryId, permalink }) => {
        formated.push({ thumbnail, title, price, categoryId, permalink });
      });

  await UserModel.createSearchResults(formated);

  return formated;
};

module.exports = {
  createSearchResults,
};