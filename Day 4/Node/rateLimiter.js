const rateLimitMap = new Map();

const RATE_LIMIT = 10;
const WINDOW_SIZE = 60 * 1000;

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 1,
      startTime: currentTime,
    });
    return next();
  }

  const userData = rateLimitMap.get(ip);
  const elapsedTime = currentTime - userData.startTime;

  if (elapsedTime > WINDOW_SIZE) {
    rateLimitMap.set(ip, {
      count: 1,
      startTime: currentTime,
    });
    return next();
  }

  if (userData.count >= RATE_LIMIT) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please try again later.",
    });
  }

  userData.count += 1;
  rateLimitMap.set(ip, userData);
  next();
};

const resetRateLimits = () => {
  rateLimitMap.clear();
};

module.exports = { rateLimiter, resetRateLimits };
