// const airbnb = require('@neutrinojs/airbnb');
// const reactComponents = require('@neutrinojs/react-components');
// const jest = require('@neutrinojs/jest');


const typescript = require('neutrinojs-typescript');
const typescriptLint = require('neutrinojs-typescript-eslint');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const eslint = require('@neutrinojs/eslint');

module.exports = {
  options: {
    root: __dirname,
    mains: {
      index: {
        entry: 'index',
        title: 'Main entry',
      },
      page1: {
        entry: 'pages/page1',
        title: 'Page1',
      },
      page2: {
        entry: 'pages/page2',
        title: 'Page2',
      },
    },
  },
  use: [
    // below each element is a middleware in neutrino
    // refer to
    // https://neutrinojs.org/middleware/
    typescript({
      tsconfig: {
        compilerOptions: {
          strict: true,
          allowJs: true,
        },
      }
    }),
    typescriptLint(),
    eslint({
      eslint: {
        baseConfig: {
          extends: [
            'eslint:recommended',
            'plugin:react/recommended',
          ]
        }
      }
    }),
    react({
      devtool: 'source-map',
    }),
    // reactComponents({
    //   // Change options related to starting a webpack-dev-server
    //   // https://webpack.js.org/configuration/dev-server/#devserverproxy
    //   // Proxy requests to /api to Wagtail local Django server
    //   // devServer: { proxy: { '/api': 'http://localhost:8000' } },

    //   // this flag disables webpack-node-externals entirely
    //   externals: false
    // }),
    jest(),
    //
    // Ensure that react is read from global - and webpack-node-externals is NOT used.
    // 
    // By default the react-components plugin uses webpack-node-externals to build
    // the externals object. This will simply get all dependencies and assume they are
    // external AND assume that requirejs is used.
    // 
    // However, for a web usage, we want only some external dependencies set up and
    // want them to read from global (aka root), hence we map the 'react' import to 'React' global.
    // See:
    //  
    // https://www.npmjs.com/package/webpack-node-externals
    // https://webpack.js.org/configuration/externals/#externals

    // later middleware overrides the former ones
    // https://neutrinojs.org/api/#config
    // https://neutrinojs.org/creating-presets/#configuring

    // since we are doint multi-entrypoint web development this time
    // external would be necessary
    // (neutrino) => {
    //   neutrino.config.when(process.env.NODE_ENV === 'production', config => {
    //     config.externals({ 
    //       react: 'React',
    //       'react-dom': 'ReactDOM',
    //     });
    //   });
    // },
  ],
};
