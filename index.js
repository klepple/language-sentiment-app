const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const books = require('./routes/api/books')

const app = express();

connectDB();

// Init Middleware (body-parser)
app.use(express.json({ extended: false }));

// Cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

// Use routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));