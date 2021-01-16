import React from 'react';
import PlaylistModel from './PlaylistModel';
import { Text } from 'react-native';
import { ListItem } from 'react-native-elements';

interface PlaylistProps {
  playlist: PlaylistModel;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  return (
    <ListItem bottomDivider onPress={() => alert('test')}>
      <ListItem.Content>
        <ListItem.Title>{playlist.Name}</ListItem.Title>
        <ListItem.Subtitle>{playlist.Songs.length} Songs</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron
        name='more-vert'
        type='material'
        size={25}
        onPress={() => alert('Test')}
      />
    </ListItem>
  );
};

export default Playlist;
