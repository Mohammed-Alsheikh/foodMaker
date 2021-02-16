import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import Swiper from '../../../../../lib/Swiper';
import {Title} from 'react-native-paper';
import {Colors} from '@styles/colors';
import {FoodSwiper, Macdolands} from '@constants/';
import {Fonts} from '@styles/fonts';
import {Container} from 'native-base';

const Slide = ({styleContainer, image, resDetail, resName, percentage}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod="resize"
        resizeMode="cover"
        style={{
          width: 200,
          height: 140,
          marginHorizontal: 180,
          marginVertical: 24,
        }}
        source={FoodSwiper}
      />
      <View style={{flex: 1}}>
        <Title style={styles.resName}>{resName}</Title>
        <Title style={styles.resDetail}>{resDetail}</Title>
        <Title style={styles.percentage}>{percentage}%</Title>
      </View>
    </View>
  );
};

const _default = ({}) => {
  return (
    <Container
      style={{
        height: 196,
        marginVertical: 120,
        top: 78,
        position: 'relative',
      }}>
      <Swiper paginationStyle={{marginVertical: -56}} activeDotColor="#ffdc10">
        <View>
          <Slide
            styleContainer={styles.container}
            image={FoodSwiper}
            resName="Mcdonalds"
            resDetail="Sale on Food"
            percentage="50"
          />
          <Image
            style={{
              paddingVertical: 2,
              paddingHorizontal: 2,
              position: 'absolute',
              top: 16,
              left: 26,
            }}
            source={Macdolands}
          />
        </View>
        <View>
          <Slide
            styleContainer={styles.container}
            image={FoodSwiper}
            resName="KFC"
            resDetail="Sale on Food"
            percentage="60"
          />
        </View>
        <View>
          <Slide
            styleContainer={styles.container}
            image={FoodSwiper}
            resName="new Resturant"
            resDetail="Sale on Food"
            percentage="70"
          />
        </View>
      </Swiper>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 232,
  },
  container: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    marginHorizontal: 18,
    backgroundColor: Colors.yellow,
    borderRadius: 16,
  },
  resName: {
    position: 'absolute',
    marginLeft: 38,
    marginVertical: -180,
    fontFamily: Fonts.Type,
    color: '#454444',
    fontSize: 18,
  },
  resDetail: {
    marginLeft: 20,
    marginVertical: -60,
    color: '#454444',
  },
  percentage: {
    marginVertical: -22,
    marginLeft: 20,
    fontSize: 30,
    color: '#454444',
  },
});

export {_default as Swiper};
export default Swiper;
