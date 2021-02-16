import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from '../scenes/App';
import {ROUTES} from '@constants/';

export default createStackNavigator(
  {
    [ROUTES.Home]: {
      screen: HomeScreen,
    },
  },

  {
    headerLayoutPreset: 'center',
    headerMode: 'none',
    initialRouteName: ROUTES.Home,
  },
);
