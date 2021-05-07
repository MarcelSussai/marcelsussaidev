module.exports = {
  env: {
    PASS: process.env.PASS
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  async Headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Accept-Encoding',
            value: 'gzip'
          }
        ]
      }
    ]
  }
};
