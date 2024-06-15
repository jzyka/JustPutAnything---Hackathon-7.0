require('dotenv').config();

const express = require('express');
const cors = require('cors');
const chatRouter = require('./routes/chat');

const port = process.env.PORT || 3000;

const app = express();

const corsOptions = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods':
    'GET, HEAD, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers':
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  Accept: 'application/json, text/plain, /',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  preflightContinue: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/chat', chatRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
