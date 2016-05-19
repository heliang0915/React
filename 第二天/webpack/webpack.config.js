var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var OpenBrowserWebpackPlugin=require("open-browser-webpack-plugin");
var ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');

// 引入编译版的react 和react-dom
var distReactPath=path.resolve(__dirname,"./node_modules/react/dist/react");
var distReactDomPath=path.resolve(__dirname,"./node_modules/react-dom/dist/react-dom");



var webpack_config={
  entry:path.resolve(__dirname,'src/index.js'),
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'built.js?[hash]'
  },
  resolve:{
    extensions:["",".js",".css",".json",".jsx"],
    alias:{
      'react':distReactPath,
      'react-dom':distReactDomPath
    }

  },
  module:{
    loaders:[
    //   {
    //     test:/\.js$/,
    //     loader:'react-hot-loader',
    //     // exclude:path.resolve(__dirname,'node_modules'),
    //     query: {compact: false}
    //  },
     {
       test:/\.js$/,
       loader:'babel-loader',
       exclude:path.resolve(__dirname,'node_modules'),
       query: {compact: false}
     },
     {
      test:/\.css/,
      loader:ExtractTextWebpackPlugin.extract('style-loader','css-loader') //'style!css'
     },
     {
      test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000"
     }
  ],
    noParse:[distReactPath,distReactDomPath]
  },
  devServer:{
    // publicPath:'/static/',
    port:8020,
    stats:{colors:true},
    contentBase:'build',
    inline:true,
    // hot:true,
    watchOptions: {
       aggregateTimeout: 30,
       poll: 1000
    }
  },
  devtool: 'cheap-module-source-map',
  plugins:[
      new HtmlWebpackPlugin({
        title:'测试',
        template:'./src/index.html'
      }),
      new OpenBrowserWebpackPlugin({
        url:'http://localhost:8020'   //自动打开浏览器
      }),
      new webpack.NoErrorsPlugin(),
      new ExtractTextWebpackPlugin("build.css?[hash]")
  ]
};
module.exports=webpack_config;
