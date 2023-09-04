import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/Launcher.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
};

export default config;
