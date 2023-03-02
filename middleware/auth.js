function auth(req, res, next) {
  if (!req.session || !req.session.clientId) {
    const err = new Error("you shall not pass");
    err.statusCode = 401;
    next(err);
  }
  next();
}

module.exports = auth;
