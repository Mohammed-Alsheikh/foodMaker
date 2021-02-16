import React from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from '../../../lib';
import {Title, } from 'react-native-paper';

export default ({}) => {
  return (
    <Swiper>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Title style={styles.text}>Hello Swiper</Title>
        </View>
        <View style={styles.slide2}>
          <Title style={styles.text}>Beautiful</Title>
        </View>
        <View style={styles.slide3}>
          <Title style={styles.text}>And simple</Title>
        </View>
      </Swiper>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
