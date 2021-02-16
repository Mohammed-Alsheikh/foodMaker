import {StyleSheet} from 'react-native';
import Fonts from '@styles/fonts';
import Colors from '@styles/colors';

export default StyleSheet.create({
  background: {
    width: null,
    height: 780,
  },
  circle1: {
    width: 360,
    height: 360,
    borderRadius: 300,
    backgroundColor: Colors.blue,
    bottom: 240,
    left: 120,
  },
  circle2: {
    width: 360,
    height: 360,
    borderRadius: 300,
    backgroundColor: Colors.yellow,
    bottom: 58,
    right: 280,
  },
  title: {
    bottom: 228,
    left: 8,
    fontWeight: 'bold',
    fontSize: 34,
    color: Colors.title,
    padding: 6,
  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 70,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#293a80',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button2: {
    paddingVertical: 10,
    paddingHorizontal: 80,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#ef4339',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button3: {
    paddingVertical: 10,
    paddingHorizontal: 78,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#3fc5f0',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button4: {
    paddingVertical: 10,
    paddingHorizontal: 84,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: Colors.yellow,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
