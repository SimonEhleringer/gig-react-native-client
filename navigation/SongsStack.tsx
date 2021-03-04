import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SongsScreen from '../screens/SongsScreen';
import AddSongScreen from '../screens/AddSongScreen';
import SearchSongScreen from '../screens/SearchSongScreen';
import UpdateSongScreen from '../screens/UpdateSongScreen';
import SearchBarHeader from '../domain/song/getSongBpmSong/SearchBarHeader';
import SearchBarHeaderContainer from '../domain/song/getSongBpmSong/SearchBarHeaderContainer';
import { useTheme } from '../hooks/useTheme';

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
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors?.lightGrey,
        },
      }}
    >
      <Stack.Screen
        name='Songs'
        component={SongsScreen}
        options={{
          title: 'Songs',
        }}
      />
      <Stack.Screen
        name='SearchSong'
        component={SearchSongScreen}
        options={{
          header: () => <SearchBarHeaderContainer />,
        }}
      />
      <Stack.Screen
        name='AddSong'
        component={AddSongScreen}
        options={{
          title: 'Song hinzufügen',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name='UpdateSong'
        component={UpdateSongScreen}
        options={{
          title: 'Song bearbeiten',
        }}
      />
    </Stack.Navigator>
  );
};

export default SongsStack;
