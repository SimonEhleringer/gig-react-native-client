import React from 'react';
import AuthenticationStack from './AuthenticationStack';
import { useSelector } from 'react-redux';
import { ReduxState } from '../config/store';
import MainTab from './MainTab';
import { createStackNavigator } from '@react-navigation/stack';

interface NavigationContainerProps {}

export type AppStackParamList = {
  MainTab: undefined;
  Authentication: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const NavigationContainer: React.FC<NavigationContainerProps> = ({}) => {
  const isUserLoggedIn = useSelector(
    (state: ReduxState) => state.authentication.isUserLoggedIn
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isUserLoggedIn ? (
        <Stack.Screen name='MainTab' component={MainTab} />
      ) : (
        <Stack.Screen name='Authentication' component={AuthenticationStack} />
      )}
    </Stack.Navigator>
  );
};

export default NavigationContainer;
