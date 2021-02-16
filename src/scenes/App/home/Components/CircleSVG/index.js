import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {width, height, Colors} from '@styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from 'native-base';
import {Fonts} from '@styles/fonts';
import {ROUTES} from '@constants/';
import {StackActions} from 'react-navigation';

const _default = ({navigation}) => {
  const navigateToConfirm = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.Home,
        params: {},
      }),
    );
  };
  return (
    <Svg
      height={width / 2}
      width={width}
      style={{position: 'absolute', zIndex: 10}}>
      <View>
        <Circle
          cx={width / 2}
          cy={-width / 2.2}
          r={width / 1.2}
          fill={Colors.yellow}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: 'red', zIndex: 14}}>
            <TouchableOpacity
              style={{
                top: 10,
                left: 12,
                position: 'absolute',
              }}>
              <Icon name="menu" size={36} style={{}} />
            </TouchableOpacity>

            <Text style={styles.text}>{'Home'}</Text>
          </View>
          <TouchableOpacity onPress={navigateToConfirm}>
            <Icon name="search" style={styles.search} size={32} />
          </TouchableOpacity>
        </View>
      </View>
    </Svg>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 12,
    left: 56,
    position: 'absolute',
    fontSize: 20,
    fontFamily: Fonts.Type,
  },
  search: {
    top: 12,
    left: 372,
    position: 'absolute',
  },
});

export {_default as CircleSVG};
export default _default;
