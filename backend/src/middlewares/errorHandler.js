// 404 Not Found Handler
const notFoundHandler = (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
    path: req.originalUrl,
  });
};

// Generic Error Handler
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
