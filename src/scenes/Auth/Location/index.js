import React from 'react';
import Colors from '@styles/colors';
import Fonts from '@styles/fonts';
import {View, TouchableOpacity} from 'react-native';
import {Button, Title, Searchbar} from 'react-native-paper';
// import Map from './map';
import {Container} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {StackActions} from 'react-navigation';
import {ROUTES} from '@constants/';
import Strings from '@localization/index';

export default ({navigation}) => {
  const navigateToConfirm = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.Home,
        params: {},
      }),
    );
  };
  const navigateToSignIn = () => {
    navigation.dispatch(
      StackActions.pop({
        routeName: ROUTES.SignIn,
        params: {},
      }),
    );
  };
  return (
    <Container>
      <View style={{flex: 1}}>
        {/* <Map /> */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={navigateToConfirm}
          style={{
            borderRadius: 10,
            alignSelf: 'center',
            bottom: 10,
            marginVertical: 20,
            position: 'absolute',
          }}>
          <Button
            mode="flat"
            style={{
              backgroundColor: Colors.yellow,
              paddingVertical: 6,
              paddingHorizontal: 100,
            }}>
            <Title
              style={{
                fontFamily: Fonts.Type,
                fontSize: Fonts.Size,
                alignSelf: 'center',
              }}>
              {Strings.SelectLocation}
            </Title>
          </Button>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <TouchableOpacity activeOpacity={0.5} onPress={navigateToSignIn}>
            <Icons
              name="arrow-back"
              style={{
                justifyContent: 'flex-start',
                fontSize: 40,
                marginVertical: 24,
                marginLeft: 8,
              }}
            />
          </TouchableOpacity>
          <Searchbar
            style={{
              paddingVertical: 6,
              paddingHorizontal: 0,
              width: 340,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 8,
              alignSelf: 'center',
              borderRadius: 6,
            }}
          />
        </View>
      </View>
    </Container>
  );
};
