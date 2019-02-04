export default function notFoundRoute(req, res, next) {
  next({ error: 'Not Found', message: 'error', status: '404' });
}
