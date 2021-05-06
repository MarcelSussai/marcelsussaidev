module.exports = {
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
