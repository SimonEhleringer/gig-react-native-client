import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Container from '../../common/Container';
import LoadingAndErrors from '../../common/LoadingAndErrors';
import Paper from '../../common/Paper';
import withBackground from '../../common/withBackground';
import withBottomRoundedCorners from '../../common/withBottomRoundedCorners';
import GetSongBpmSongModel from './GetSongBpmSongModel';
import SearchSongItem from './SearchSongItem';

interface SearchSongContentProps {
  getSongBpmSongs: GetSongBpmSongModel[];
  loading: boolean;
  errors: string[];
}

const SearchSongContent: React.FC<SearchSongContentProps> = ({
  getSongBpmSongs,
  loading,
  errors,
}) => {
  return (
    <ScrollView>
      <Container>
        <LoadingAndErrors loading={loading} errors={errors}>
          {getSongBpmSongs.length > 0 && (
            <Paper>
              {getSongBpmSongs.map((song, index) => {
                return <SearchSongItem key={index} getSongBpmSong={song} />;
              })}
            </Paper>
          )}
        </LoadingAndErrors>
      </Container>
    </ScrollView>
  );
};

export default withBottomRoundedCorners(withBackground(SearchSongContent));
