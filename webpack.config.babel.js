import path from "path"
// import webpack from "webpack"
import pkg from './package.json';

// CONSTANTS
const paths = pkg.flooper.devPaths;

let isProduction = global.isProduction;
let devtool = isProduction ? null : "#source-map";


export const libConfig = {

  entry: {
    // "webpack/hot/dev-server",
    // "webpack-hot-middleware/client",
    [`${paths.lib.dest}/Flooper`]: `${paths.lib.src}/index.js`, // library compiled
  },

  output: {
    path: path.join(__dirname),
    // publicPath: '/dist/js',
    filename: "[name].js",
    library: "Flooper",
    libraryTarget: "umd"
  },

  devtool,

  resolve: {
    root: [
      path.join(__dirname, "node_modules")
    ],
    moduleDirectories: [
      "node_modules"
    ],
    extensions: ["", ".js", ".jsx", ".webpack.js", ".web.js"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader?optional[]=runtime&stage=0"
      }
    ]
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};


export const siteConfig = {
  entry: {
    // "webpack/hot/dev-server",
    // "webpack-hot-middleware/client",
    [`${paths.site.dest}/js/app`]: `${paths.site.src}/js/app.js`,// get site js make it available to site
  },

  output: {
    path: path.join(__dirname),
    // publicPath: '/dist/js',
    filename: "[name].js",
  },
  devtool,
  resolve: {
    root: [
      path.join(__dirname, "node_modules")
    ],
    moduleDirectories: [
      "node_modules"
    ],
    extensions: ["", ".js", ".jsx", ".webpack.js", ".web.js"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader?optional[]=runtime&stage=0"
      }
    ]
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};
