import React, { useEffect } from 'react';
import AuthenticationSettings from './AuthenticationSettings';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../../config/store';
import { useTheme } from '../../../hooks/useTheme';
import { logout } from '../slice';
import { loadSongs } from '../../song/slice';
import { loadPlaylists } from '../../playlist/slice';

interface AuthenticationSettingsContainerProps {}

const AuthenticationSettingsContainer: React.FC<AuthenticationSettingsContainerProps> = ({}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const state = useSelector((state: ReduxState) => state.authentication);
  const username = state.username;

  const songCount = useSelector((state: ReduxState) => state.song).songs.length;
  const playlistCount = useSelector((state: ReduxState) => state.playlist)
    .playlists.length;

  // useEffect(() => {
  //   if (songCount === 0) {
  //     dispatch(loadSongs());
  //     console.log('loading songs');
  //   }

  //   if (playlistCount === 0) {
  //     dispatch(loadPlaylists());
  //     console.log('loading playlists');
  //   }
  // }, []);

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
    />
  );
};

export default AuthenticationSettingsContainer;
