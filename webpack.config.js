const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    //entry: './src/index.js',
    
    //input terpisah
    entry: {
        main: './src/index.js',
        book: './src/book.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    output: { 
        //filename: 'myscript-[hash].js',
        
        //content hash
        filename: '[name]-[contenthash].js',
        path: path.resolve(__dirname, 'build') 
    },
    externals: {
        //import jquery nanti diganti
        'jquery': '$'
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.html',
            //relative terhadap outputh path
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]

}