module.exports = {
  reactStrictMode: false,
  webpack: function (config, options) {
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};
