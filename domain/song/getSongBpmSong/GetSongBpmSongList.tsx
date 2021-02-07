import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../../common/Container';
import LoadingAndErrors from '../../common/LoadingAndErrors';
import Paper from '../../common/Paper';
import GetSongBpmSongModel from './GetSongBpmSongModel';
import GetSongBpmSong from './GetSongBpmSong';

interface GetSongBpmSongListProps {
  getSongBpmSongs: GetSongBpmSongModel[];
  loading: boolean;
  errors: string[];
  handleSongPress: () => void;
}

const GetSongBpmSongList: React.FC<GetSongBpmSongListProps> = ({
  getSongBpmSongs,
  loading,
  errors,
  handleSongPress,
}) => {
  return (
    <LoadingAndErrors loading={loading} errors={errors}>
      <ScrollView style={{ backgroundColor: 'transparent' }}>
        <Container>
          {getSongBpmSongs.length > 0 && (
            <Paper>
              {getSongBpmSongs.map((song, index) => {
                return (
                  <GetSongBpmSong
                    key={index}
                    getSongBpmSong={song}
                    hasBottomDivider={index !== getSongBpmSongs.length - 1}
                    handleSongPress={handleSongPress}
                  />
                );
              })}
            </Paper>
          )}
        </Container>
      </ScrollView>
    </LoadingAndErrors>
  );
};

export default GetSongBpmSongList;
