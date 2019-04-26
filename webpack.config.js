const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: { 
        filename: 'myscript-[hash].js',
        path: path.resolve(__dirname, 'build') }
}