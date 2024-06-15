const { json } = require('express');
const cohere = require('../config/cohere');

const chatRequest = async (req, res) => {
  try {
    const response = await cohere.chat({
      chatHistory: [
        { role: 'USER', message: 'Who discovered gravity?' }, // ini adalah konteksnya
        {
          role: 'CHATBOT',
          message:
            'The man who is widely credited with discovering gravity is Sir Isaac Newton', // ini adalah jawaban default dari chatbot
        },
      ],
      message: 'What year was he born?',
      // perform web search before answering the question. You can also use your own custom connector.
      connectors: [{ id: 'web-search' }],
    });

    res.status(200).json({
      messages: response,
    });
  } catch (err) {
    // catch all errors
    console.log(err.statusCode);
    console.log(err.message);
    console.log(err.body);
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  chatRequest,
};
