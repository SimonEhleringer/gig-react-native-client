import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useTheme } from '../../hooks/useTheme';
import {
  PlaylistStackParamList,
  UpdatePlaylistParams,
} from '../../navigation/PlaylistStack';
import PlaylistEntity from './PlaylistModel';
import PlaylistWithBottomSheet from './PlaylistWithBottomSheet';

interface PlaylistWithBottomSheetContainerProps {
  playlist: PlaylistEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const PlaylistWithBottomSheetContainer: React.FC<PlaylistWithBottomSheetContainerProps> = ({
  playlist,
  isFirstItem,
  isLastItem,
}) => {
  const theme = useTheme();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'Playlists'
  > = useNavigation();

  const bottomSheetRef = useRef<RBSheet>(null);

  const handleBottomSheetEdit = () => {
    bottomSheetRef.current?.close();

    const params: UpdatePlaylistParams = {
      playlistId: playlist.playlistId,
    };

    navigation.navigate('UpdatePlaylist', params);
  };

  const handleBottomSheetDelete = () => {};

  const handleChevronPress = () => {
    bottomSheetRef.current?.open();
  };

  return (
    <PlaylistWithBottomSheet
      theme={theme}
      playlist={playlist}
      isFirstItem={isFirstItem}
      isLastItem={isLastItem}
      handleChevronPress={handleChevronPress}
      bottomSheetRef={bottomSheetRef}
      handleBottomSheetEdit={handleBottomSheetEdit}
      handleBottomSheetDelete={handleBottomSheetDelete}
    />
  );
};

export default PlaylistWithBottomSheetContainer;
