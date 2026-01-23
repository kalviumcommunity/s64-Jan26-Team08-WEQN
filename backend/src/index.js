const express = require('express');
const cors = require('cors');
const { port, nodeEnv } = require('./config/env');
const healthRoutes = require('./routes/health');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', healthRoutes);

// Error Handling Middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} in ${nodeEnv} mode`);
});

module.exports = app;
