module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        Blacklist: null,
        Whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@graphql': './src/graphql',
          '@containers': './src/containers',
          '@constant': './src/constant',
          '@assets': './src/assets',
          '@api': './src/api',
          '@database': './src/database',
          '@navigation': './src/navigation',
          '@util': './src/util',
          '@styles': './src/styles',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
