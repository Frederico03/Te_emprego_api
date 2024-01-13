module.exports = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    connectionString: process.env.MONGO_DB,
  },
  requests: {
    rateLimit: {
      windowMs: 20 * 60 * 1000, // ms
      limit: 100,
    },
    slowDown: {
      windowMs: 15 * 60 * 1000, // ms
      delayAfter: 100,
      delayMs: 100,
    },
  },
};
