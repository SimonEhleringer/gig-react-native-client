import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Container from '../common/Container';
import Paper from '../common/Paper';
import SongContainer from './SongContainer';
import SongEntity from './SongEntity';

interface SongListProps {
  songs: SongEntity[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <Container>
      <Paper>
        {songs.map((song, index) => {
          return (
            <SongContainer
              key={song.songId}
              song={song}
              hasBottomDivider={index !== songs.length - 1}
            />
          );
        })}
      </Paper>
    </Container>
  );
};

export default SongList;
