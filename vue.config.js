'use strict';

const webpack = require('webpack');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'src/index.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  chainWebpack: (config) => {
    const imagesRule = config.module.rule('images');
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 13312 }));
  },

  css: { extract: false },
  productionSourceMap: false,
};