const path = require('path');


module.exports = {
    entry: './index.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        library: 'apiValidator',
        libraryTarget: 'umd',
        filename: 'ts-api-validator.js',
        globalObject: 'this',
        path: path.resolve(__dirname, 'dist'),
    }
};
