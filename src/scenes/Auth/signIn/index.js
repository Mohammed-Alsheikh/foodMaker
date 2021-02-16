import React, {useState} from 'react';
import {Content} from 'native-base';
import Fonts from '@styles/fonts';
import {View, Image, TouchableOpacity} from 'react-native';
import {Title, Button, Text, TextInput} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackActions} from 'react-navigation';
import {ROUTES, Profile} from '@constants/';
import styles from './styles';
import Strings from '@localization/index';

export default ({navigation}) => {
  const [image, setImage] = useState(null);

  const Pick = () =>
    ImagePicker.showImagePicker(response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        // const source = {uri: response.uri};
        setImage(response);
      }
    });
  const navigateToSignUp = () => {
    navigation.dispatch(
      StackActions.pop({
        routeName: ROUTES.SignUp,
        params: {},
      }),
    );
  };
  const navigateToLocation = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.Location,
        params: {},
      }),
    );
  };
  return (
    <Content>
      <View style={styles.background}>
        <View>
          <View style={styles.circle1}>
            <View style={styles.circle2} />
          </View>
          <TouchableOpacity
            style={{bottom: 400, left: 10, width: 40}}
            onPress={navigateToSignUp}>
            <Icon name="arrow-back" style={{fontSize: 40}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={Pick}
          style={{alignSelf: 'center', bottom: 400, width: 140, height: 140}}>
          {image ? (
            <Image
              source={{uri: image.uri}}
              style={{width: 140, height: 140, borderRadius: 80}}
            />
          ) : (
            <Image style={styles.profile} source={Profile} />
          )}
        </TouchableOpacity>
        <TextInput mode="flat" label={Strings.Name} style={styles.input1} />
        <TextInput mode="flat" label={Strings.Email} style={styles.input2} />
        <TextInput
          mode="flat"
          secureTextEntry={true}
          label={Strings.Password}
          style={styles.input3}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={navigateToLocation}
          style={{bottom: 280, width: 360, height: 72, alignSelf: 'center'}}>
          <Button mode="flat" style={styles.button1}>
            <Title
              style={{
                alignSelf: 'center',
                fontSize: Fonts.Size,
                color: '#333333',
                fontFamily: Fonts.Type,
              }}>
              {Strings.SignUp}
            </Title>
          </Button>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            bottom: 120,
            position: 'absolute',
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
