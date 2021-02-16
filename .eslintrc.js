module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        node: {
          paths: ['src'],
        
        alias: {
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@images': 'src/constants',
          '@routes': 'src/constants',
          '@localizatioin': 'src/localization',
          '@styles': 'src/styles',
          '@lib': 'src/lib',
        },
      },
    },
  },
},
};