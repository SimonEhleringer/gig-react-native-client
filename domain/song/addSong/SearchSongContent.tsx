import React from 'react';
import { Text, View } from 'react-native';
import Container from '../../common/Container';
import Paper from '../../common/Paper';
import withBackground from '../../common/withBackground';
import GetSongBpmSongModel from './GetSongBpmSongModel';

interface SearchSongContentProps {
  getSongBpmSongs: GetSongBpmSongModel[];
}

const SearchSongContent: React.FC<SearchSongContentProps> = ({
  getSongBpmSongs,
}) => {
  return (
    <Container>
      <Paper hasPadding>
        {getSongBpmSongs.map((song, index) => {
          return <Text key={index}>{song.title}</Text>;
        })}
      </Paper>
    </Container>
  );
};

export default withBackground(SearchSongContent);
