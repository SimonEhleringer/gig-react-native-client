import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import CreatePlaylistScreen from '../screens/CreatePlaylistScreen';
import UpdatePlaylistScreen from '../screens/UpdatePlaylistScreen';
import PlaylistSongsScreen from '../screens/PlaylistSongsScreen';
import AddSongToPlaylistScreen from '../screens/AddSongToPlaylistScreen';
import SearchSongForAddingToPlaylistScreen from '../screens/SearchSongForAddingToPlaylistScreen';
import SearchBarHeaderContainer from '../domain/song/getSongBpmSong/SearchBarHeaderContainer';
import AddNewSongToPlaylistScreen from '../screens/AddNewSongToPlaylistScreen';
import { useTheme } from '../hooks/useTheme';

interface PlaylistStackProps {}

export type PlaylistStackParamList = {
  Playlists: undefined;
  CreatePlaylist: undefined;
  UpdatePlaylist: UpdatePlaylistParams;
  PlaylistSongs: PlaylistSongsParams;
  AddSongToPlaylist: AddSongToPlaylistParams;
  SearchSong: SearchSongParams;
  CreateSong: CreateSongParams;
  AddNewSongToPlaylist: AddNewSongToPlaylistParams;
};

export interface UpdatePlaylistParams {
  playlistId: string;
}

export interface PlaylistSongsParams {
  playlistId: string;
}

export interface AddSongToPlaylistParams {
  playlistId: string;
}

export interface SearchSongParams {
  playlistId: string;
}

export interface CreateSongParams {
  playlistId: string;
}

export interface AddNewSongToPlaylistParams {
  getSongBpmSongId?: string;
  playlistId: string;
}

const Stack = createStackNavigator<PlaylistStackParamList>();

const PlaylistStack: React.FC<PlaylistStackProps> = ({}) => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors?.lightGrey,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name='Playlists'
        component={PlaylistsScreen}
        options={{ title: 'Playlists' }}
      />
      <Stack.Screen
        name='CreatePlaylist'
        component={CreatePlaylistScreen}
        options={{ title: 'Playlist erstellen' }}
      />
      <Stack.Screen
        name='UpdatePlaylist'
        component={UpdatePlaylistScreen}
        options={{ title: 'Playlist bearbeiten' }}
      />
      <Stack.Screen name='PlaylistSongs' component={PlaylistSongsScreen} />
      <Stack.Screen
        name='AddSongToPlaylist'
        component={AddSongToPlaylistScreen}
        options={{ title: 'Song auswählen' }}
      />
      <Stack.Screen
        name='SearchSong'
        component={SearchSongForAddingToPlaylistScreen}
        options={{
          header: () => <SearchBarHeaderContainer />,
        }}
      />
      <Stack.Screen
        name='AddNewSongToPlaylist'
        component={AddNewSongToPlaylistScreen}
        options={{
          title: 'Song erstellen',
        }}
      />
    </Stack.Navigator>
  );
};

export default PlaylistStack;
