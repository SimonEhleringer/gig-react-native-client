import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Container from '../common/Container';
import Paper from '../common/Paper';
import Song from './Song';
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
            <Song
              key={song.songId}
              song={song}
              hasBottomDivider={index !== songs.length - 1}
            />
          );
        })}

        {/* <Song key={songs[3].songId} song={songs[3]} hasBottomDivider={false} /> */}

        {/* <FlatList
          keyExtractor={(item: SongEntity) => item.songId}
          data={songs}
          renderItem={({ item, index }) => (
            <Song song={item} hasBottomDivider={index !== songs.length - 1} />
          )}
        /> */}
      </Paper>
    </Container>
  );
};

export default SongList;
