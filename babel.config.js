const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.js', '.ios.js', '.android.js', '.json'],
    alias: {
      '@assets': './src/assets',
      '@constants': './src/constants',
      '@images': './src/constants',
      '@routes': './src/constants',
      '@localization': './src/localization',
      '@styles': './src/styles',
      '@lib': './src/lib',
    },
  },
];

module.exports = {
  plugins: [MODULE_RESOLVER],
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
};
