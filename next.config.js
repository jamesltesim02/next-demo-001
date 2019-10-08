// const withSass = require('@zeit/next-sass')

// function HACK_removeMinimizeOptionFromCssLoaders(config) {
//   config.module.rules.forEach(rule => {
//     if (Array.isArray(rule.use)) {
//       rule.use.forEach(u => {
//         if (u.loader === 'css-loader' && u.options) {
//           delete u.options.minimize;
//         }
//       })
//     }
//   })
// }

// module.exports = withSass({
//   webpack(config) {
//     HACK_removeMinimizeOptionFromCssLoaders(config)
//     return config
//   },
//   cssLoaderOptions: {
//     importLoaders: 1,
//   },
//   devIndicators: {
//     autoPrerender: false,
//   },
// })


// const withLess = require('@zeit/next-less')
// module.exports = withLess({
//   // webpack(config) {
//   //   HACK_removeMinimizeOptionFromCssLoaders(config)
//   //   return config
//   // },
// })

// const withCSS = require("@zeit/next-css");
// const withSass = require("@zeit/next-sass");
// module.exports = withCSS({});
// module.exports = withSass({});

module.exports = {
  // distDir: 'dist'
}
