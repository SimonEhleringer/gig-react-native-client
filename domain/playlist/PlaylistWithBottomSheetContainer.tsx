import { useNetInfo } from "@react-native-community/netinfo";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from "react-redux";
import { useTheme } from "../../hooks/useTheme";
import {
  PlaylistSongsParams,
  PlaylistStackParamList,
  UpdatePlaylistParams,
} from "../../navigation/PlaylistStack";
import PlaylistEntity from "./PlaylistModel";
import PlaylistWithBottomSheet from "./PlaylistWithBottomSheet";
import { deletePlaylist } from "./slice";

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
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    "Playlists"
  > = useNavigation();
  const netInfo = useNetInfo();

  const bottomSheetRef = useRef<RBSheet>(null);

  const handleBottomSheetEdit = () => {
    bottomSheetRef.current?.close();

    const params: UpdatePlaylistParams = {
      playlistId: playlist.playlistId,
    };

    navigation.navigate("UpdatePlaylist", params);
  };

  const handleBottomSheetDelete = () => {
    bottomSheetRef.current?.close();

    dispatch(deletePlaylist(playlist.playlistId));
  };

  const handleChevronPress = () => {
    bottomSheetRef.current?.open();
  };

  const handlePlaylistPress = () => {
    const params: PlaylistSongsParams = {
      playlistId: playlist.playlistId,
    };

    navigation.navigate("PlaylistSongs", params);
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
      handlePlaylistPress={handlePlaylistPress}
      netInfo={netInfo}
    />
  );
};

export default PlaylistWithBottomSheetContainer;
