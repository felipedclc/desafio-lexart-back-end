const connection = require('./connection');

const createSearchResults = async (productsList) => {
  const db = await connection();
    
  const newResults = db.collection('users').insertMany(productsList);
  
  return newResults;
};

const findAllResearches = async () => {
  const db = await connection();
  const results = db.collection('users').find().toArray();
  return results;
};

module.exports = {
  createSearchResults,
  findAllResearches,
};
