// const airbnb = require('@neutrinojs/airbnb');
const reactComponents = require('@neutrinojs/react-components');
// const jest = require('@neutrinojs/jest');


const typescript = require('neutrinojs-typescript');
const typescriptLint = require('neutrinojs-typescript-eslint');
// const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const eslint = require('@neutrinojs/eslint');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    typescript({ tsconfig: {
      compilerOptions: {
        strict: true,
        allowJs: true,
      },
    } }),
    typescriptLint(),
    eslint({ eslint: { baseConfig: { extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ] } } }),
    reactComponents({
      // Change options related to starting a webpack-dev-server
      // https://webpack.js.org/configuration/dev-server/#devserverproxy
      // Proxy requests to /api to Wagtail local Django server
      // devServer: { proxy: { '/api': 'http://localhost:8000' } },
    }),
    jest(),
  ],
};
