import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../config/store";
import { useFetchGetSongBpmSong } from "../../hooks/useFetchGetSongBpmSong";
import { useOnUpdateEffect } from "../../hooks/useOnUpdateEffect";
import { PlaylistStackParamList } from "../../navigation/PlaylistStack";
import PlaylistEntity from "../playlist/PlaylistModel";
import { PlaylistNotFoundError } from "../playlist/saga/shared";
import {
  AddRemoveSongPlaylistPayload,
  addSongToPlaylist,
} from "../playlist/slice";
import AddToPlaylistSongForm from "./AddToPlaylistSongForm";
import { createSong, CreateSongPayload } from "./slice";

interface AddToPlaylistSongFormContainerProps {}

const AddToPlaylistSongFormContainer: React.FC<AddToPlaylistSongFormContainerProps> = ({}) => {
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    "AddSongToPlaylist"
  > = useNavigation();
  const route: RouteProp<
    PlaylistStackParamList,
    "AddSongToPlaylist"
  > = useRoute();
  const dispatch = useDispatch();

  const state = useSelector((state: ReduxState) => state.playlist);
  const playlist = state.playlists.find(
    (playlist) => playlist.playlistId === route.params.playlistId
  );

  if (!playlist) {
    throw new PlaylistNotFoundError(route.params.playlistId);
  }

  const [title, setTitle] = useState("");
  const [interpreter, setInterpreter] = useState("");
  const [tempo, setTempo] = useState("");
  const [notes, setNotes] = useState("");

  const [prevPlaylist, setPrevPlaylist] = useState<PlaylistEntity>(playlist);

  const { getSongBpmErrors, getSongBpmLoading } = useFetchGetSongBpmSong(
    route.params.playlistId,
    setTitle,
    setInterpreter,
    setTempo
  );

  //const [getSongBpmLoading, getSongBpmErrors, title, setTitle, interpreter, setInterpreter, tempo, setTempo, notes, setNotes] = useFetchGetSongBpmSong();

  useOnUpdateEffect(() => {
    // if (loading === false && errors.length === 0) {
    //   navigation.navigate('Songs');
    // }
  }, [playlist]);

  const handleSubmit = () => {
    const createSongPayload: CreateSongPayload = {
      title,
      interpreter,
      tempo: +tempo,
      notes,
    };

    dispatch(createSong(createSongPayload));

    // const addSongToPlaylistPayload: AddRemoveSongPlaylistPayload = {
    //   playlistId: route.params.playlistId,
    //   songId:
    // }

    // dispatch(addSongToPlaylist())
  };

  return (
    <AddToPlaylistSongForm
      getSongBpmLoading={getSongBpmLoading}
      getSongBpmErrors={getSongBpmErrors}
      title={title}
      setTitle={setTitle}
      interpreter={interpreter}
      setInterpreter={setInterpreter}
      tempo={tempo}
      setTempo={setTempo}
      notes={notes}
      setNotes={setNotes}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddToPlaylistSongFormContainer;
