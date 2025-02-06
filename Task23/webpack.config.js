import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default () => {
    return {
        mode: 'production',
        entry: './vute-app/src/index.jsx',
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
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-transform-react-jsx"
                        ]},
                }
            }]
        }
    }
}