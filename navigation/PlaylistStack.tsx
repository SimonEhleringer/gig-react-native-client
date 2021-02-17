import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import CreatePlaylistScreen from '../screens/CreatePlaylistScreen';
import UpdatePlaylistScreen from '../screens/UpdatePlaylistScreen';
import PlaylistSongsScreen from '../screens/PlaylistSongsScreen';
import AddSongToPlaylistScreen from '../screens/AddSongToPlaylistScreen';

interface PlaylistStackProps {}

export type PlaylistStackParamList = {
  Playlists: undefined;
  CreatePlaylist: undefined;
  UpdatePlaylist: UpdatePlaylistParams;
  PlaylistSongs: PlaylistSongsParams;
  AddSongToPlaylist: undefined;
};

export interface UpdatePlaylistParams {
  playlistId: string;
}

export interface PlaylistSongsParams {
  playlistId: string;
}

const Stack = createStackNavigator<PlaylistStackParamList>();

const PlaylistStack: React.FC<PlaylistStackProps> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 } }}>
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
    </Stack.Navigator>
  );
};

export default PlaylistStack;
