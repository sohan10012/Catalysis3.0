const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database/db');
const routes = require('./routes/routes');
const authRoutes = require('./routes/auth');  // Add this line

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/auth', authRoutes);  // Add this line
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});