// import AppNavigator from './app-navigator';

// export default AppNavigator;

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {ROUTES} from '@constants/';

const RootNavigator = createSwitchNavigator(
  {
    [ROUTES.AuthNavigator]: {screen: AuthNavigator},
    [ROUTES.AppNavigator]: {screen: AppNavigator},
  },
  {
    initialRouteName: ROUTES.AuthNavigator,
  },
);

export default createAppContainer(RootNavigator);
