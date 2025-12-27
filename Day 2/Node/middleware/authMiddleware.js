const authMiddleware = (req, res, next) => {
  if (req.cookies.auth === "authenticated") {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ message: "Authorization required" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [username, password] = decoded.split(":");

  if (username === "abhii" && password === "Abhi@123") {
    return next();
  }

  return res.status(401).json({ message: "Invalid authentication" });
};

module.exports = authMiddleware;
