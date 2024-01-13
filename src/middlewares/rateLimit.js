const { requests } = require('@config/index');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
  windowMs: requests.rateLimit.windowMs,
  limit: requests.rateLimit.limit,
});

const slower = slowDown({
  windowMs: requests.slowDown.windowMs,
  delayAfter: requests.slowDown.delayAfter,
  delayMs: requests.slowDown.delayMs,
});

module.exports = [
  limiter,
  slower,
];
