import React from 'react';
import {StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {View, Content} from 'native-base';
import Colors from '@styles/colors';

export default ({}) => {
  return (
    <Content>
      <View style={styles.background}>
        <View style={styles.circle1}>
          <View style={styles.circle2} />
        </View>

        <Title style={styles.title}>{'Glad to '}</Title>
        <Title style={styles.title}>{'Meet you !'}</Title>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
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
    right: 260,
  },
  title: {
    bottom: 160,
    left: 8,
    fontWeight: 'bold',
    fontSize: 34,
    color: Colors.title,
    padding: 6,
  },
});
