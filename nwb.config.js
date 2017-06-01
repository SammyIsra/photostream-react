module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactPhotoStream',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    compat: {
      enzyme: true
    }
  }
}
