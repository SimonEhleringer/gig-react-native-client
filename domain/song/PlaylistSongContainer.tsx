import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import { PlaylistStackParamList } from '../../navigation/PlaylistStack';
import {
  AddSongToPlaylistPayload,
  moveSongInPlaylist,
  MoveSongInPlaylistPayload,
  removeSongFromPlaylist,
  RemoveSongFromPlaylistPayload,
} from '../playlist/slice';
import PlaylistSong from './PlaylistSong';
import SongEntity from './SongEntity';

interface PlaylistSongContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  index: number;
}

const PlaylistSongContainer: React.FC<PlaylistSongContainerProps> = ({
  song,
  isFirstItem,
  isLastItem,
  index,
}) => {
  const theme = useTheme();
  const route: RouteProp<PlaylistStackParamList, 'PlaylistSongs'> = useRoute();
  const dispatch = useDispatch();

  const bottomSheetRef = useRef<RBSheet>(null);

  const handleChevronPress = () => {
    bottomSheetRef.current?.open();
  };

  const handleBottomSheetMoveUp = () => {
    const payload: MoveSongInPlaylistPayload = {
      playlistId: route.params.playlistId,
      songIndex: index,
      direction: 'up',
    };

    dispatch(moveSongInPlaylist(payload));
  };

  const handleBottomSheetMoveDown = () => {
    const payload: MoveSongInPlaylistPayload = {
      playlistId: route.params.playlistId,
      songIndex: index,
      direction: 'down',
    };

    dispatch(moveSongInPlaylist(payload));
  };

  const handleBottomSheetRemoveFromPlaylist = () => {
    bottomSheetRef.current?.close();

    const payload: RemoveSongFromPlaylistPayload = {
      playlistId: route.params.playlistId,
      songIndex: index,
    };

    dispatch(removeSongFromPlaylist(payload));
  };

  return (
    <PlaylistSong
      theme={theme}
      song={song}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleChevronPress={handleChevronPress}
      bottomSheetRef={bottomSheetRef}
      handleBottomSheetMoveUp={handleBottomSheetMoveUp}
      handleBottomSheetMoveDown={handleBottomSheetMoveDown}
      handleBottomSheetRemoveFromPlaylist={handleBottomSheetRemoveFromPlaylist}
    />
  );
};

export default PlaylistSongContainer;
