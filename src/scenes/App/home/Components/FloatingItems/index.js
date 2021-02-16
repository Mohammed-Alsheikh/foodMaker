import React from 'react';
import {View, TouchableOpacity, ImageBackground, Text} from 'react-native';
import styles from './styles';
import {width} from '@styles/index';

const _default = ({}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        left: 0,
        right: 0,
        top: width / 5 - 24,
      }}>
      <View>
        <TouchableOpacity style={styles.imageContainer} activeOpacity={0.5}>
          <ImageBackground
            style={styles.firstImage}
            resizeMethod="resize"
            resizeMode="cover"
            source={require('@assets/images/classic.png')}>
            <Text style={styles.textImage}>{'10 resturant'}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.imageContainer} activeOpacity={0.5}>
        <ImageBackground
          style={styles.firstImage}
          resizeMethod="resize"
          resizeMode="cover"
          source={require('@assets/images/classic.png')}>
          <Text style={styles.textImage}>{'10 resturant'}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export {_default as FloatingItems};
export default _default;
