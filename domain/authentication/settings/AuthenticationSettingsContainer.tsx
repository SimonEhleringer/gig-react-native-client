import React, { useEffect } from 'react';
import AuthenticationSettings from './AuthenticationSettings';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../../config/store';
import { useTheme } from '../../../hooks/useTheme';
import { logout } from '../slice';

interface AuthenticationSettingsContainerProps {}

const AuthenticationSettingsContainer: React.FC<AuthenticationSettingsContainerProps> = ({}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const state = useSelector((state: ReduxState) => state.authentication);
  const { username, errors, loading } = state;

  const songCount = useSelector((state: ReduxState) => state.song).songs.length;
  const playlistCount = useSelector((state: ReduxState) => state.playlist)
    .playlists.length;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthenticationSettings
      username={username}
      theme={theme}
      handleLogout={handleLogout}
      songCount={songCount}
      playlistCount={playlistCount}
      errors={errors}
      loading={loading}
    />
  );
};

export default AuthenticationSettingsContainer;
