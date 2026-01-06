const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error("Unauthorized: Token missing");
    err.status = 401;
    return next(err);
  }

  if (token !== "Bearer mysecrettoken") {
    const err = new Error("Unauthorized: Invalid token");
    err.status = 403;
    return next(err);
  }

  req.user = { id: 1, role: "admin" };
  next();
};

module.exports = auth;
