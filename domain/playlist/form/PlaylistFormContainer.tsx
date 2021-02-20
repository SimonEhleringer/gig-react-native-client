import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../config/store';
import { useTheme } from '../../../hooks/useTheme';
import { PlaylistStackParamList } from '../../../navigation/PlaylistStack';
import PlaylistForm from './PlaylistForm';
import { useOnUpdateEffect } from '../../../hooks/useOnUpdateEffect';

interface PlaylistFormContainerProps {
  handleSubmit: () => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const PlaylistFormContainer: React.FC<PlaylistFormContainerProps> = ({
  handleSubmit,
  name,
  setName,
}) => {
  const theme = useTheme();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'Playlists'
  > = useNavigation();
  const state = useSelector((state: ReduxState) => state.playlist);
  const loading = state.loading;
  const errors = state.errors;

  useOnUpdateEffect(() => {
    if (loading === false && errors.length === 0) {
      navigation.navigate('Playlists');
    }
  }, [loading, errors]);

  const handleNameChanged = (newName: string) => {
    setName(newName);
  };

  const handleSubmitOverridden = () => {
    Keyboard.dismiss();

    handleSubmit();
  };

  return (
    <PlaylistForm
      theme={theme}
      loading={loading}
      errors={errors}
      name={name}
      handleSubmit={handleSubmitOverridden}
      handleNameChanged={handleNameChanged}
    />
  );
};

export default PlaylistFormContainer;
