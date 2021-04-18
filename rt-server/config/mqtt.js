const redis = require("redis");

module.exports = {
  port: 1883,
  backend: {
    type: "redis",
    redis,
    return_buffers: true,
  },
};
