# treeShakingEvaluation
Test project to evaluate effects of things like treeShaking and peerDependencies on bundle-size

Treeshaking
===========
With webpack 3.11.x - 3.12.0, unused methods are cut out provided babel-loader is specified with option 'env' and modules: false 


        {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            options: {
                presets: [['env', { 'modules': false }]]
            },
            loader: 'babel-loader'
        }

This is to prevent babel from transpiling to CommonJS modules, since webpack cant treeshake them.

The actual code removal is done with UglifyJsPlugin

    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    // drop_console: true
                }
            }
        })
    ],

