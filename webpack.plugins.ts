import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const assets = ['css', 'data'];

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  ...assets.map(a => new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src', a),
        to: path.resolve(__dirname, '.webpack/renderer', a)
      },
    ],
  })),
];
