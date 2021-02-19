import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { useFetchGetSongBpmSong } from '../../hooks/useFetchGetSongBpmSong';
import { useOnUpdateEffect } from '../../hooks/useOnUpdateEffect';
import {
  PlaylistSongsParams,
  PlaylistStackParamList,
} from '../../navigation/PlaylistStack';
import Errors from '../common/Errors';
import PlaylistEntity from '../playlist/PlaylistModel';
import { PlaylistNotFoundError } from '../playlist/saga/shared';
import {
  addNewSongToPlaylist,
  AddNewSongToPlaylistPayload,
  AddRemoveSongPlaylistPayload,
  addSongToPlaylist,
} from '../playlist/slice';
import AddToPlaylistSongForm from './AddToPlaylistSongForm';
import { createSong, CreateSongPayload } from './slice';

interface AddToPlaylistSongFormContainerProps {}

const AddToPlaylistSongFormContainer: React.FC<AddToPlaylistSongFormContainerProps> = ({}) => {
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'AddNewSongToPlaylist'
  > = useNavigation();
  const route: RouteProp<
    PlaylistStackParamList,
    'AddNewSongToPlaylist'
  > = useRoute();
  const dispatch = useDispatch();

  const state = useSelector((state: ReduxState) => state.playlist);
  const { loading, errors } = state;

  const [title, setTitle] = useState('');
  const [interpreter, setInterpreter] = useState('');
  const [tempo, setTempo] = useState('');
  const [notes, setNotes] = useState('');

  //const [prevPlaylist, setPrevPlaylist] = useState<PlaylistEntity>(playlist);

  const { getSongBpmErrors, getSongBpmLoading } = useFetchGetSongBpmSong(
    route.params.getSongBpmSongId,
    setTitle,
    setInterpreter,
    setTempo
  );

  //const [getSongBpmLoading, getSongBpmErrors, title, setTitle, interpreter, setInterpreter, tempo, setTempo, notes, setNotes] = useFetchGetSongBpmSong();

  //useOnUpdateEffect(() => {
  // if (loading === false && errors.length === 0) {
  //   navigation.navigate('Songs');
  // }
  //}, [playlist]);

  useOnUpdateEffect(() => {
    if (!loading && errors.length === 0) {
      const params: PlaylistSongsParams = {
        playlistId: route.params.playlistId,
      };

      navigation.navigate('PlaylistSongs', params);
    }
  }, [loading, errors]);

  const handleSubmit = () => {
    const createSongPayload: CreateSongPayload = {
      title,
      interpreter,
      tempo: +tempo,
      notes,
    };

    const payload: AddNewSongToPlaylistPayload = {
      playlistId: route.params.playlistId,
      createSongPayload,
    };

    dispatch(addNewSongToPlaylist(payload));
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
      loading={loading}
      errors={errors}
    />
  );
};

export default AddToPlaylistSongFormContainer;
