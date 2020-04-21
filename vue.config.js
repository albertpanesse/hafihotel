module.exports = {
  publicPath: '',
  outputDir: '../eresto-container/www',
  devServer: {
    open: process.platform === 'darwin',
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 8080,
    https: false,
    hotOnly: false,
  }
}
