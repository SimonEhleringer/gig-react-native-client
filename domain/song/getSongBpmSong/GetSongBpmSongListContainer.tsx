import { StackNavigationProp } from '@react-navigation/stack';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../../config/store';
import {
  AddSongParams,
  SongsStackParamList,
} from '../../../navigation/SongsStack';
import { getErrorsFromError } from '../../common/saga';
import GetSongBpmSongList from './GetSongBpmSongList';
import { requestSong } from './saga/requests';
import { setLoading, setErrors } from './slice';

interface GetSongBpmSongListContainerProps {
  navigation: StackNavigationProp<SongsStackParamList, 'SearchSong'>;
}

const GetSongBpmSongListContainer: React.FC<GetSongBpmSongListContainerProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  const state = useSelector((state: ReduxState) => state.addSong);
  const getSongBpmSongs = state.getSongBpmSongs;
  let errors = state.errors;
  const loading = state.loading;

  const handleSongPress = (id: string) => {
    dispatch(setLoading(true));

    let addSongParams: AddSongParams = {
      title: '',
      interpreter: '',
      tempo: 0,
      notes: '',
    };

    requestSong(id)
      .then((result) => {
        const response = result.data;

        const { title, artist, tempo } = response.song;

        addSongParams.title = title;
        addSongParams.interpreter = artist.name;
        addSongParams.tempo = tempo;

        dispatch(setLoading(false));

        navigation.navigate('AddSong', addSongParams);
      })
      .catch((e) => {
        dispatch(setErrors(getErrorsFromError(e)));
      });
  };

  return (
    <GetSongBpmSongList
      getSongBpmSongs={getSongBpmSongs}
      loading={loading}
      errors={errors}
      handleSongPress={handleSongPress}
    />
  );
};

export default GetSongBpmSongListContainer;
