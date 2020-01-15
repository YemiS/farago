const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    externals: [nodeExternals()],
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            include: __dirname,
            exclude: /node_modules/,
            loader: "babel-loader"
         }
      ]
   }
};
