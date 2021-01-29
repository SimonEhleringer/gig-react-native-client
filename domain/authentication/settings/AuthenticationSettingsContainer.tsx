import React from 'react';
import AuthenticationSettings from './AuthenticationSettings';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../../config/store';
import { useTheme } from '../../../hooks/useTheme';
import { logout } from '../authenticationSlice';

interface AuthenticationSettingsContainerProps {}

const AuthenticationSettingsContainer: React.FC<AuthenticationSettingsContainerProps> = ({}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const state = useSelector((state: ReduxState) => state.authentication);
  const username = state.username;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthenticationSettings
      username={username}
      theme={theme}
      handleLogout={handleLogout}
    />
  );
};

export default AuthenticationSettingsContainer;
