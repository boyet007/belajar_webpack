const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    
    //input terpisah
    // entry: {
    //     main: './src/index.js',
    //     book: './src/book.js'
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.html',
            //relative terhadap outputh path
            filename: 'index.html',
            chunkFilename: '[name]-[contenthash:2].js'
        }),
        new MiniCSSExtractPlugin({
            filename: './styles/[name]-[contenthash:8].css'
        }),
        new CleanWebpackPlugin(),
    
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                //use: ['style-loader', 'css-loader']
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
             
            },
            
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
    devServer: {
        host: '0.0.0.0'
    },
    

}