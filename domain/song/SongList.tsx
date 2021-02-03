import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../common/Container';
import Paper from '../common/Paper';
import SongContainer from './SongContainer';
import SongEntity from './SongEntity';
import LoadingAndErrors from '../common/LoadingAndErrors';

interface SongListProps {
  songs: SongEntity[];
  loading: boolean;
  errors: string[];
}

const SongList: React.FC<SongListProps> = ({ songs, loading, errors }) => {
  return (
    <>
      <LoadingAndErrors loading={loading} errors={errors}>
        <ScrollView nestedScrollEnabled>
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
        </ScrollView>
      </LoadingAndErrors>
    </>
  );
};

export default SongList;
