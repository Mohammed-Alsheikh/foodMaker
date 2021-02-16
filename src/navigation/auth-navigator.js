import {createStackNavigator} from 'react-navigation-stack';
import {
  IntroScreen,
  LocationScreen,
  SignInScreen,
  SignInConfirmScreen,
  SignUpScreen,
} from '../scenes/Auth';
import {ROUTES} from '@constants/index';

export default createStackNavigator(
  {
    [ROUTES.Intro]: {
      screen: IntroScreen,
    },
    [ROUTES.SignIn]: {
      screen: SignInScreen,
    },
    [ROUTES.SignUp]: {
      screen: SignUpScreen,
    },
    [ROUTES.SignInConfirm]: {
      screen: SignInConfirmScreen,
    },
    [ROUTES.Location]: {
      screen: LocationScreen,
    },
  },

  {
    headerLayoutPreset: 'center',
    headerMode: 'none',
    initialRouteName: ROUTES.Intro,
  },
);
