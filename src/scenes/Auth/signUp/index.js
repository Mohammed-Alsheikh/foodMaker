import React from 'react';
import {Content} from 'native-base';
import {View, TouchableOpacity, Linking, Image} from 'react-native';
import Colors from '@styles/colors';
import {Title, Button, Text} from 'react-native-paper';
import {StackActions} from 'react-navigation';
import {ROUTES, Logo} from '../../../constants';
import Fonts from '@styles/fonts';
import styles from './styles';
import Strings from '@localization/index';

const _handleFBPress = () => Linking.openURL('http://facebook.com');
const _handleGPress = () => Linking.openURL('http://gmail.com');
const _handleTPress = () => Linking.openURL('http://twitter.com');

export default ({navigation}) => {
  const navigateToSignIn = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.SignIn,
        params: {},
      }),
    );
  };
  return (
    <Content>
      <View style={styles.background}>
        <View style={styles.circle1}>
          <View style={styles.circle2} />
          <Image
            source={Logo}
            style={{
              width: 100,
              height: 100,
              bottom: 90,
              left: 20,
              borderRadius: 10,
            }}
          />
        </View>

        <Title style={styles.title}>{Strings.Welcome}</Title>
        <Title style={styles.title}>{Strings.Food}</Title>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{bottom: 200}}
          onPress={_handleFBPress}>
          <Button
            mode="flat"
            color="white"
            icon="facebook"
            style={styles.button1}>
            <Title
              style={{
                fontSize: Fonts.Size,
                color: 'white',
                fontFamily: Fonts.Type,
              }}>
              {Strings.Facebook}
            </Title>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{bottom: 180}}
          onPress={_handleGPress}>
          <Button
            mode="flat"
            color="white"
            icon="google"
            style={styles.button2}>
            <Title
              style={{
                alignSelf: 'center',
                fontSize: Fonts.Size,
                color: 'white',
                fontFamily: Fonts.Type,
              }}>
              {Strings.Google}
            </Title>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{bottom: 160}}
          onPress={_handleTPress}>
          <Button
            mode="flat"
            color="white"
            icon="twitter"
            style={styles.button3}>
            <Title
              style={{
                textAlign: 'center',
                fontSize: Fonts.Size,
                color: 'white',
                fontFamily: Fonts.Type,
              }}>
              {Strings.Twitter}
            </Title>
          </Button>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', bottom: 120, left: 10}}>
          <Title
            style={{
              textAlign: 'center',
              fontSize: Fonts.Size,
              color: Colors.grayDark,
            }}>
            {Strings.Or}
          </Title>
          <View
            style={{
              left: 14,
              alignContent: 'center',
              width: 340,
              height: 2,
              marginVertical: 20,
              backgroundColor: Colors.grayDark,
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{bottom: 86}}
          onPress={navigateToSignIn}>
          <Button mode="flat" color="white" icon="email" style={styles.button4}>
            <Title
              style={{
                textAlign: 'center',
                fontSize: Fonts.Size,
                color: 'white',
              }}>
              {Strings.EmailSign}
            </Title>
          </Button>
        </TouchableOpacity>
        <Text
          style={{
            position: 'absolute',
            textAlign: 'center',
            bottom: 8,
            alignSelf: 'center',
            fontSize: Fonts.Size,
            color: '#9852f9',
            fontFamily: Fonts.Type,
          }}>
          {Strings.BySigning}
        </Text>
      </View>
    </Content>
  );
};
