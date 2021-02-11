import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SongsScreen from '../screens/SongsScreen';
import AddSongScreen from '../screens/AddSongScreen';
import SearchSongScreen from '../screens/SearchSongScreen';
import UpdateSongScreen from '../screens/UpdateSongScreen';

interface SongsStackProps {}

export type SongsStackParamList = {
  Songs: undefined;
  SearchSong: undefined;
  AddSong: AddUpdateSongParams | undefined;
  UpdateSong: AddUpdateSongParams;
};

export interface AddUpdateSongParams {
  id: string;
}

const Stack = createStackNavigator<SongsStackParamList>();

const SongsStack: React.FC<SongsStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Songs'
        component={SongsScreen}
        options={{
          title: 'Songs',
          headerStyle: {
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name='SearchSong'
        component={SearchSongScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='AddSong'
        component={AddSongScreen}
        options={{
          title: 'Song hinzufügen',
          headerStyle: {
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name='UpdateSong'
        component={UpdateSongScreen}
        options={{
          title: 'Song bearbeiten',
          headerStyle: {
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default SongsStack;
