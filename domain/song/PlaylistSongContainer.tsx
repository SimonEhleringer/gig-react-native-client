import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from "react-redux";
import { useTheme } from "../../hooks/useTheme";
import { PlaylistStackParamList } from "../../navigation/PlaylistStack";
import {
  AddRemoveSongPlaylistPayload,
  removeSongFromPlaylist,
} from "../playlist/slice";
import PlaylistSong from "./PlaylistSong";
import SongEntity from "./SongEntity";

interface PlaylistSongContainerProps {
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const PlaylistSongContainer: React.FC<PlaylistSongContainerProps> = ({
  song,
  isFirstItem,
  isLastItem,
}) => {
  const theme = useTheme();
  const route: RouteProp<PlaylistStackParamList, "PlaylistSongs"> = useRoute();
  const dispatch = useDispatch();

  const bottomSheetRef = useRef<RBSheet>(null);

  const handleChevronPress = () => {
    bottomSheetRef.current?.open();
  };

  const handleBottomSheetRemoveFromPlaylist = () => {
    bottomSheetRef.current?.close();

    const payload: AddRemoveSongPlaylistPayload = {
      playlistId: route.params.playlistId,
      songId: song.songId,
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
      handleBottomSheetRemoveFromPlaylist={handleBottomSheetRemoveFromPlaylist}
    />
  );
};

export default PlaylistSongContainer;
