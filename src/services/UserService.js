const UserModel = require('../model/UserModel');

const createSearchResults = async (productsList) => {
  const formated = [];
    Object.values(productsList)
      .forEach(({ id, title, price, category_id: categoryId, permalink }) => {
        formated.push({ id, title, price, categoryId, permalink });
      });

  await UserModel.createSearchResults(formated);

  return formated;
};

module.exports = {
  createSearchResults,
};