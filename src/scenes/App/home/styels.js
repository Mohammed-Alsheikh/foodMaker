import {StyleSheet} from 'react-native';
import {Colors, Fonts, width, height} from '@styles/index';

const CIRCLE_WIDTH = width * 1.2;

export default StyleSheet.create({
  circle: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    top: -CIRCLE_WIDTH / 2,
    left: -CIRCLE_WIDTH / 5,
    borderRadius: CIRCLE_WIDTH / 2,
    backgroundColor: Colors.yellow,
    zIndex: -1,
    position: 'absolute',
  },
  firstImage: {
    width: 180,
    height: 140,
    zIndex: 4,
    borderRadius: 90,
  },
  textImage: {
    top: 68,
    left: 6,
    color: Colors.grayDark,
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
    marginVertical: 10,
  },
});
