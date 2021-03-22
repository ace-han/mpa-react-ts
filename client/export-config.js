module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  context: '/Users/ace/workspace/github/mpa-react-ts/client',
  stats: {
    children: false,
    entrypoints: false,
    modules: false
  },
  node: {
    Buffer: false,
    fs: 'empty',
    tls: 'empty'
  },
  output: {
    path: '/Users/ace/workspace/github/mpa-react-ts/client/build',
    publicPath: '/',
    filename: 'assets/[name].js'
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    extensions: [
      '.web.jsx',
      '.web.js',
      '.wasm',
      '.mjs',
      '.jsx',
      '.js',
      '.ts',
      '.tsx',
      '.json'
    ]
  },
  devServer: {
    port: 5000,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    stats: {
      all: false,
      errors: true,
      timings: true,
      warnings: true
    }
  },
  module: {
    rules: [
      /* neutrino.config.module.rule('lint') */
      {
        test: /\.(mjs|jsx|js|ts|tsx)$/,
        enforce: 'pre',
        include: [
          '/Users/ace/workspace/github/mpa-react-ts/client/src',
          '/Users/ace/workspace/github/mpa-react-ts/client/test'
        ],
        use: [
          /* neutrino.config.module.rule('lint').use('eslint') */
          {
            loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/eslint-loader/dist/cjs.js',
            options: {
              cache: true,
              cwd: '/Users/ace/workspace/github/mpa-react-ts/client',
              emitWarning: true,
              failOnError: false,
              formatter: 'codeframe',
              useEslintrc: false,
              baseConfig: {
                parser: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/babel-eslint/lib/index.js',
                root: true,
                'extends': [
                  'eslint:recommended',
                  'plugin:react/recommended',
                  'plugin:@typescript-eslint/recommended',
                  'plugin:jest/recommended'
                ],
                env: {
                  es6: true,
                  browser: true,
                  commonjs: true
                },
                globals: {
                  process: true
                },
                parserOptions: {
                  ecmaVersion: 2018,
                  sourceType: 'module'
                },
                plugins: [
                  'babel',
                  'react',
                  'react-hooks'
                ],
                settings: {
                  'import/resolver': {
                    node: {
                      extensions: [
                        '.mjs',
                        '.jsx',
                        '.js',
                        '.ts',
                        '.tsx'
                      ]
                    }
                  },
                  react: {
                    version: 'detect'
                  }
                },
                rules: {
                  'react-hooks/rules-of-hooks': 'error',
                  'react-hooks/exhaustive-deps': 'warn'
                },
                overrides: [
                  {
                    files: [
                      '*.ts'
                    ],
                    rules: {
                      'getter-return': [
                        'off'
                      ],
                      'no-dupe-args': [
                        'off'
                      ],
                      'no-dupe-keys': [
                        'off'
                      ],
                      'no-unreachable': [
                        'off'
                      ],
                      'valid-typeof': [
                        'off'
                      ],
                      'no-const-assign': [
                        'off'
                      ],
                      'no-new-symbol': [
                        'off'
                      ],
                      'no-this-before-super': [
                        'off'
                      ],
                      'no-undef': [
                        'off'
                      ],
                      'no-dupe-class-members': [
                        'off'
                      ],
                      '@typescript-eslint/no-dupe-class-members': [
                        'error'
                      ],
                      'no-redeclare': [
                        'off'
                      ],
                      '@typescript-eslint/no-redeclare': [
                        'error'
                      ],
                      'no-extra-semi': [
                        'off'
                      ],
                      '@typescript-eslint/no-extra-semi': [
                        'error'
                      ],
                      'no-unused-vars': [
                        'off'
                      ],
                      '@typescript-eslint/no-unused-vars': [
                        'error'
                      ]
                    }
                  },
                  {
                    files: [
                      '*.tsx'
                    ],
                    rules: {
                      'getter-return': [
                        'off'
                      ],
                      'no-dupe-args': [
                        'off'
                      ],
                      'no-dupe-keys': [
                        'off'
                      ],
                      'no-unreachable': [
                        'off'
                      ],
                      'valid-typeof': [
                        'off'
                      ],
                      'no-const-assign': [
                        'off'
                      ],
                      'no-new-symbol': [
                        'off'
                      ],
                      'no-this-before-super': [
                        'off'
                      ],
                      'no-undef': [
                        'off'
                      ],
                      'no-dupe-class-members': [
                        'off'
                      ],
                      '@typescript-eslint/no-dupe-class-members': [
                        'error'
                      ],
                      'no-redeclare': [
                        'off'
                      ],
                      '@typescript-eslint/no-redeclare': [
                        'error'
                      ],
                      'no-extra-semi': [
                        'off'
                      ],
                      '@typescript-eslint/no-extra-semi': [
                        'error'
                      ],
                      'no-unused-vars': [
                        'off'
                      ],
                      '@typescript-eslint/no-unused-vars': [
                        'error'
                      ]
                    }
                  },
                  {
                    files: [
                      '*.mjs'
                    ]
                  },
                  {
                    files: [
                      '*.jsx'
                    ]
                  },
                  {
                    files: [
                      '*.js'
                    ]
                  },
                  {
                    files: [
                      '*.ts'
                    ]
                  },
                  {
                    files: [
                      '*.tsx'
                    ]
                  }
                ]
              },
              parser: '@typescript-eslint/parser',
              parserOptions: {
                project: './tsconfig.json'
              },
              plugins: [
                '@typescript-eslint'
              ]
            }
          }
        ]
      },
      /* neutrino.config.module.rule('html') */
      {
        test: /\.html$/,
        use: [
          /* neutrino.config.module.rule('html').use('html') */
          {
            loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/html-loader/index.js',
            options: {
              attrs: [
                'img:src',
                'link:href'
              ]
            }
          }
        ]
      },
      /* neutrino.config.module.rule('compile') */
      {
        test: /\.(mjs|jsx|js|ts|tsx)$/,
        include: [
          '/Users/ace/workspace/github/mpa-react-ts/client/src',
          '/Users/ace/workspace/github/mpa-react-ts/client/test'
        ],
        use: [
          /* neutrino.config.module.rule('compile').use('babel') */
          {
            loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/babel-loader/lib/index.js',
            options: {
              cacheDirectory: true,
              babelrc: false,
              configFile: false,
              presets: [
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/preset-env/lib/index.js',
                  {
                    debug: false,
                    useBuiltIns: 'usage',
                    shippedProposals: true,
                    targets: {
                      browsers: 'ie 9'
                    },
                    corejs: 3
                  }
                ],
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/preset-react/lib/index.js',
                  {
                    development: true,
                    useSpread: true
                  }
                ],
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/preset-typescript/lib/index.js',
                  {
                    jsxPragma: 'React',
                    onlyRemoveTypeImports: true
                  }
                ]
              ],
              plugins: [
                '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
                  {
                    loose: false
                  }
                ],
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js',
                  {
                    loose: false
                  }
                ],
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/plugin-proposal-logical-assignment-operators/lib/index.js'
                ],
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
                  {
                    loose: false,
                    useBuiltIns: false
                  }
                ],
                [
                  '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@babel/plugin-proposal-optional-chaining/lib/index.js',
                  {
                    loose: false
                  }
                ]
              ]
            }
          }
        ]
      },
      /* neutrino.config.module.rule('style') */
      {
        oneOf: [
          /* neutrino.config.module.rule('style').oneOf('modules') */
          {
            test: /\.module\.css$/,
            use: [
              /* neutrino.config.module.rule('style').oneOf('modules').use('style') */
              {
                loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/style-loader/dist/cjs.js'
              },
              /* neutrino.config.module.rule('style').oneOf('modules').use('css') */
              {
                loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 0,
                  modules: true
                }
              }
            ]
          },
          /* neutrino.config.module.rule('style').oneOf('normal') */
          {
            test: /\.css$/,
            use: [
              /* neutrino.config.module.rule('style').oneOf('normal').use('style') */
              {
                loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/style-loader/dist/cjs.js'
              },
              /* neutrino.config.module.rule('style').oneOf('normal').use('css') */
              {
                loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 0
                }
              }
            ]
          }
        ]
      },
      /* neutrino.config.module.rule('font') */
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          /* neutrino.config.module.rule('font').use('file') */
          {
            loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      /* neutrino.config.module.rule('image') */
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|webp)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          /* neutrino.config.module.rule('image').use('url') */
          {
            loader: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 8192,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      name: true
    },
    runtimeChunk: 'single'
  },
  plugins: [
    /* neutrino.config.plugin('html-index') */
    new (require('/Users/ace/workspace/github/mpa-react-ts/client/node_modules/html-webpack-plugin/index.js'))(
      {
        template: '/Users/ace/workspace/github/mpa-react-ts/client/node_modules/@neutrinojs/html-template/template.ejs',
        appMountId: 'root',
        lang: 'en',
        meta: {
          viewport: 'width=device-width, initial-scale=1'
        },
        filename: 'index.html',
        chunks: [
          'index'
        ],
        title: 'React Preview'
      }
    ),
    /* neutrino.config.plugin('hot') */
    new (require('/Users/ace/workspace/github/mpa-react-ts/client/node_modules/webpack/lib/HotModuleReplacementPlugin.js'))()
  ],
  entry: {
    index: [
      '/Users/ace/workspace/github/mpa-react-ts/client/src/index'
    ]
  }
};
