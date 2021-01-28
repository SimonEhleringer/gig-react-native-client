import React from 'react';
import AuthenticationSettings from './AuthenticationSettings';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { useTheme } from '../../hooks/useTheme';
import withBackground from '../common/withBackground';

interface AuthenticationSettingsContainerProps {}

const AuthenticationSettingsContainer: React.FC<AuthenticationSettingsContainerProps> = ({}) => {
  const theme = useTheme();

  const state = useSelector((state: ReduxState) => state.authentication);
  const username = state.username;

  return <AuthenticationSettings username={username} theme={theme} />;
};

export default AuthenticationSettingsContainer;
