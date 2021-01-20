import React from 'react';
import { NavigationContainer as ReactNavigationContainer } from '@react-navigation/native';
import PlaylistStack from './PlaylistStack';
import AuthenticationStack from './AuthenticationStack';
import { useSelector } from 'react-redux';
import { ReduxState } from '../config/store';

interface NavigationContainerProps {}

const NavigationContainer: React.FC<NavigationContainerProps> = ({}) => {
  const isUserLoggedIn = useSelector(
    (state: ReduxState) => state.authentication.isUserLoggedIn
  );

  return (
    <ReactNavigationContainer>
      {isUserLoggedIn ? <PlaylistStack /> : <AuthenticationStack />}
    </ReactNavigationContainer>
  );
};

export default NavigationContainer;
