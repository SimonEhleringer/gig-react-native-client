import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlaylistsScreen from '../screens/PlaylistsScreen';

interface PlaylistStackProps {}

const Stack = createStackNavigator();

const PlaylistStack: React.FC<PlaylistStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Playlists' component={PlaylistsScreen} />
    </Stack.Navigator>
  );
};

export default PlaylistStack;
