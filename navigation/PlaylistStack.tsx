import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlaylistsScreen from '../screens/PlaylistsScreen';

interface PlaylistStackProps {}

export type PlaylistStackParamList = {
  Playlists: undefined;
};

const Stack = createStackNavigator<PlaylistStackParamList>();

const PlaylistStack: React.FC<PlaylistStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Playlists'
        component={PlaylistsScreen}
        options={{ title: 'Playlists' }}
      />
    </Stack.Navigator>
  );
};

export default PlaylistStack;
