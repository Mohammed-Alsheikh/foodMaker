import {StyleSheet} from 'react-native';
import {Colors, Fonts, width, height, boxShadow} from '@styles/index';

const IMAGE_WIDTH = width / 2;

export default StyleSheet.create({
  firstImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH / 1.45,
    marginHorizontal: 0,
    marginVertical: 0,
    margin: 4,
  },
  imageContainer: {
    ...boxShadow(2),
    zIndex: 12,
    margin: 4,
  },
  textImage: {
    bottom: 48,
    left: 22,
    color: Colors.grayDark,
    position: 'absolute',
    fontWeight: 'bold',
  },
  foodName: {
    fontSize: 18,
    fontFamily: Fonts.Type,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    fontFamily: Fonts.Type,
    color: '#6C63FF',
  },
});
