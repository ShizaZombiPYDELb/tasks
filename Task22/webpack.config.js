import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default () => {
    return {
        mode: 'development',
        entry: './src/index22.js',
        output: {
            path: resolve(__dirname, './dist'),
            filename: 'index.jsx',
        },
        module: {
            rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']}
                }
            },
                {
                    test: /\.s[ac]ss$/,
                    exclude: /node_modules/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['style-loader',
                        {loader: 'css-loader'},
                    ],
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({filename: 'style.css'}),
        ],
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin(), new  CssMinimizerPlugin()],
        },

    }
}