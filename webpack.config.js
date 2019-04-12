module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/public',
        filename: 'build/index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};
