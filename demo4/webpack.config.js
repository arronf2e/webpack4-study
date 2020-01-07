const path = require('path')

module.exports = {
    mode: 'development',
    entry: './page',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    }
}