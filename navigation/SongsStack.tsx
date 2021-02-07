import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SongsScreen from '../screens/SongsScreen';
import AddSongScreen from '../screens/SearchSongScreen';

interface SongsStackProps {}

export type SongsStackParamList = {
  Songs: undefined;
  SearchSong: undefined;
};

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
        component={AddSongScreen}
        options={{
          headerShown: false,
        }}
        // options={{
        //   title: 'Songs',
        //   headerStyle: {
        //     elevation: 0,
        //   },
        // }}
      />
    </Stack.Navigator>
  );
};

export default SongsStack;
