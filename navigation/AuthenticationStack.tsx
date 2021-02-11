import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

interface AuthenticationStackProps {}

export type AuthenticationStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<AuthenticationStackParamList>();

const AuthenticationStack: React.FC<AuthenticationStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
