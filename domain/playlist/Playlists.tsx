import React from 'react';
import { Text, FlatList } from 'react-native';
import PlaylistModel from './PlaylistModel';
import PlaylistContainer from './PlaylistContainer';

interface PlaylistsProps {
  playlists: PlaylistModel[];
}

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={playlists}
      renderItem={({ item }) => <PlaylistContainer playlist={item} />}
    />
  );
};

export default Playlists;
