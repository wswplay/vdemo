module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vdemo/'
    : '/',
  outputDir: 'docs'
}