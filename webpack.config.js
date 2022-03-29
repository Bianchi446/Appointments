const path = require("path");
const webpack = require("webpack");

module.exports = {
 mode: "development",
 module: {
   rules: [
     {
     test: /\.(js|jsx)$/,
     exclude: /node_modules/,
     loader: 'babel-loader'
    },
     {
      test: /\.s[ac]ss$/i,
     use: ['style-loader','css-loader', 'sass-loader']
    }
    ]
  }
};
  
