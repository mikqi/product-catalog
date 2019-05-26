const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  // eslint-disable-next-line
  require.extensions['.css'] = file => {}
}

module.exports = withCSS(
  withTypescript({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }
  
      return config
    }
  })
)
