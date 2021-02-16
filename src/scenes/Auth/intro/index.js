import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Swiper from '../../../lib/Swiper';
import {Title, Paragraph} from 'react-native-paper';
import {StackActions, SwitchActions} from 'react-navigation';
import Color from '@styles/colors';
import Fonts from '@styles/fonts';
import Strings from '@localization/';

const SwiperImage = require('../../../assets/images/shop.png');

const Slide = ({containerStyle, text, desc}) => {
  return (
    <View style={containerStyle}>
      <View style={styles.circle} />
      <Title style={styles.title}>{text}</Title>
      <Paragraph style={styles.paragraph}>{desc}</Paragraph>
    </View>
  );
};
const Slide2 = ({containerStyle, text, desc}) => {
  return (
    <View>
      <View style={styles.circle}>
        <Image style={styles.imageShop} source={SwiperImage} />
      </View>
      <View style={containerStyle} />
      <Title style={styles.title}>{text}</Title>
      <Paragraph style={styles.paragraph}>{desc}</Paragraph>
    </View>
  );
};

export default ({navigation}) => {
  return (
    <Swiper
      showsButtons={true}
      onIndexChanged={index => index === 3 && navigation.navigate('SignUp')}>
      <Slide2
        containerStyle={styles.slide}
        text={Strings.WelcomeTo}
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Slide
        containerStyle={styles.slide}
        text={Strings.WelcomeTo}
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Slide
        containerStyle={styles.slide}
        text={Strings.WelcomeTo}
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <View />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: Color.white,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 240,
    backgroundColor: Color.yellow,
    bottom: 80,
    right: 100,
  },
  title: {
    alignSelf: 'center',
    bottom: 26,
    fontSize: 26,
    fontFamily: Fonts.Type,
    color: Fonts.color,
  },
  paragraph: {
    alignSelf: 'center',
    fontSize: 18,
    padding: 8,
    color: Color.grayDark,
    margin: 32,
  },
  imageShop: {
    width: 320,
    height: 320,
    marginHorizontal: 96,
    marginVertical: 100,
  },
});
