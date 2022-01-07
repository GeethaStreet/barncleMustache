var path = require('path');

module.exports = (env = {}) => {  
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { 
            test: /\.handlebars$/,
            loader: "handlebars-loader",
            options: {
                helperDirs: path.join(__dirname, './src/js/helpers'),
                precompileOptions: {
                    knownHelpersOnly: false,
                },
                partialDirs: [
                    path.join(__dirname, './src/js/partials')
                ]
          }
        },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }]
    }
  }
}