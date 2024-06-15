const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.API_KEY,
});

module.exports = cohere;
