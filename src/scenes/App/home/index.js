import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Content} from 'native-base';
import {CircleSVG, FloatingItems, FlatListItem, Swiper} from './Components';

export default ({}) => {
  return (
    <Container>
      <View style={{height: 10}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            position: 'relative',
            elevation: 8,
            zIndex: 100,
            width: 60,
            height: 60,
            top: 700,
            left: 332,
            borderRadius: 60,
            backgroundColor: '#3C338F',
          }}>
          <View>
            <Icon
              name="shopping-basket"
              color="white"
              size={40}
              style={{alignSelf: 'center', marginVertical: 8}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <CircleSVG />
      <FloatingItems />

      <Content>
        <Swiper />

        <FlatListItem />
      </Content>
    </Container>
  );
};
