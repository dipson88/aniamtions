const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    resolve: {
      mainFiles: ['Index.vue', 'index']
    },
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,html,scss}'],
        fix: true
      })
    ]
  }
}
