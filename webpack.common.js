const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: ['/node_modules/'], 
                use: [{ 
                    loader: 'babel-loader',
                    options: {
                        presets: [  
                            '@babel/preset-env', 
                            '@babel/preset-react', 
                            { plugins: [
                                '@babel/plugin-proposal-class-properties', 
                                '@babel/plugin-transform-modules-commonjs',
                                '@babel/plugin-transform-runtime'
                                ]
                            }
                        ] 
                    } 
                }], 
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            query: { name:'assets/[name].[ext]' }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        query: {
                            mozjpeg: { progressive: true, },
                            gifsicle: { interlaced: true, },
                            optipng: { optimizationLevel: 7, }
                        }
                    }
                }]
            },
            { test: /\.s(a|c)ss$/, use: [{ loader: 'style-loader' }, 
            { loader: 'css-loader' }, 
            { loader: 'sass-loader' }], }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ template: 'index.html' }),
        new CleanWebpackPlugin(),
    ]
}
     