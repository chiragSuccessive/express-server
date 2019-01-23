export default function errorHandler(err, req, res, next) {
  const timestamp = new Date();
  res.json({
    error: err,
    message: "error",
    status: 500,
    timestamp: timestamp
  });
}
