import {Platform} from 'react-native';

const Fonts = {
  Type: Platform.OS === 'ios' ? 'OswaldRegular' : 'Oswald-Regular',
  Size: 14,
  AlignText: 'auto',
  color: '#6E6E70',
};

export {Fonts};
export default Fonts;
