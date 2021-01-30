import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SongsScreen from '../screens/SongsScreen';
import { SONGS_STACK_ROUTE } from './constants';

interface SongsStackProps {}

const Stack = createStackNavigator();

const SongsStack: React.FC<SongsStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SONGS_STACK_ROUTE}
        component={SongsScreen}
        options={{ title: 'Songs' }}
      />
    </Stack.Navigator>
  );
};

export default SongsStack;
