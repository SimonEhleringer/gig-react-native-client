import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import Tempo from './components/Tempo';
import SongEntity from './SongEntity';

interface SongProps {
  song: SongEntity;
  hasBottomDivider: boolean;
}

const Song: React.FC<SongProps> = ({ song, hasBottomDivider }) => {
  return (
    <ListItem
      style={{ backgroundColor: 'transparent' }}
      containerStyle={{ backgroundColor: 'transparent' }}
      bottomDivider={hasBottomDivider}
      onPress={() => alert('test')}
    >
      <ListItem.Content style={styles.leftListItemContent}>
        <ListItem.Title>{song.title}</ListItem.Title>
        <ListItem.Subtitle>{song.interpreter}</ListItem.Subtitle>
      </ListItem.Content>

      <ListItem.Content style={styles.rightListItemContent}>
        <Tempo tempo={song.tempo} />
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

const styles = StyleSheet.create({
  leftListItemContent: {
    flex: 2,
  },
  rightListItemContent: {
    alignItems: 'center',
  },
});

export default Song;
