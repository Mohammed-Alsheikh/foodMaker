import {StyleSheet} from 'react-native';
import Fonts from '@styles/fonts';
import Colors from '@styles/colors';
import {width, height} from '@styles/index';

export default StyleSheet.create({
  background: {
    width: null,
    height: 800,
    backgroundColor: 'white',
  },
  circle1: {
    width: 420,
    height: 420,
    borderRadius: 300,
    backgroundColor: Colors.blue,
    bottom: 240,
    left: 120,
  },
  circle2: {
    width: 380,
    height: 380,
    borderRadius: 400,
    backgroundColor: Colors.yellow,
    bottom: 30,
    right: 260,
  },
  arrow: {
    bottom: 340,
    width: 30,
    height: 30,
    left: 22,
  },
  button1: {
    paddingHorizontal: 60,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.yellow,
  },
  profile: {
    width: 140,
    height: 140,
  },
  input1: {
    position: 'relative',
    bottom: 360,
    paddingVertical: 4,
    marginHorizontal: 22,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    fontFamily: Fonts.Type,
    justifyContent: 'center',
  },
  input2: {
    position: 'relative',
    bottom: 340,
    paddingVertical: 4,
    marginHorizontal: 22,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    fontFamily: Fonts.Type,
    justifyContent: 'center',
  },
  input3: {
    position: 'relative',
    bottom: 320,
    paddingVertical: 4,
    marginHorizontal: 22,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    fontFamily: Fonts.Type,
    justifyContent: 'center',
  },
});
