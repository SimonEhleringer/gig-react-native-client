import React from 'react';
import { configureDb } from './config/db';
import { Provider as ReduxProvider } from 'react-redux';
import store from './config/store';
import NavigationContainer from './navigation/NavigationContainer';

export default function App() {
  configureDb();

  return (
    <ReduxProvider store={store}>
      <NavigationContainer />
    </ReduxProvider>
  );
}
