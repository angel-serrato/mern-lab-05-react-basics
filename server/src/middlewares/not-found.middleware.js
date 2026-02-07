const notFound = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;
  const error = new Error(`Cannot ${method} ${url} - Not Found`);
  error.statusCode = 404;
  next(error);
};

export default notFound;
