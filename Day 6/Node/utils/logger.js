function logWithTimestamp(message) {
  console.log(`[${new Date().toLocaleString()}] ${message}`);
}

module.exports = logWithTimestamp;
