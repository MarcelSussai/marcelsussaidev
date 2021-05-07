const withPWA = require('next-pwa');

module.exports = withPWA({
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
  },
  pwa: {
    dest: 'public',
    register: true,
    sw: '/sw.js'
  }
});
