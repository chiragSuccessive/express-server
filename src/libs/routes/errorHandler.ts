export default function errorHandler(err, req, res, next) {
  const { error, message, status } = err;
  const timestamp = new Date();
  res.json({
    error: error || "error",
    message: message || "null",
    status: status || 500,
    timestamp: timestamp
  });
}
