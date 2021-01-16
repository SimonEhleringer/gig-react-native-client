import { StatusBar } from 'expo-status-bar';
import React from 'react';
import PlaylistStack from './navigation/PlaylistStack';
import { NavigationContainer } from '@react-navigation/native';
import { configureDb } from './config/db';
import { Provider as ReduxProvider } from 'react-redux';
import store from './config/store';

export default function App() {
  configureDb();

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <PlaylistStack />
      </NavigationContainer>
    </ReduxProvider>
  );
}
