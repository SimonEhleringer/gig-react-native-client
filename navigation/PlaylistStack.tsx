import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import { PLAYLISTS_STACK_ROUTE } from './constants';

interface PlaylistStackProps {}

const Stack = createStackNavigator();

const PlaylistStack: React.FC<PlaylistStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PLAYLISTS_STACK_ROUTE}
        component={PlaylistsScreen}
        options={{ title: 'Playlists' }}
      />
    </Stack.Navigator>
  );
};

export default PlaylistStack;
