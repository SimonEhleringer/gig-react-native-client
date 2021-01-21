import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { LOGIN_STACK_ROUTE, REGISTER_STACK_ROUTE } from './constants';

interface AuthenticationStackProps {}

const Stack = createStackNavigator();

const AuthenticationStack: React.FC<AuthenticationStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOGIN_STACK_ROUTE}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={REGISTER_STACK_ROUTE}
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
