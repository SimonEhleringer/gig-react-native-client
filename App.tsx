import React from 'react';
import { configureDb } from './config/db';
import { Provider as ReduxProvider } from 'react-redux';
import store from './config/store';
import NavigationContainer from './navigation/NavigationContainer';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './config/themes';

export default function App() {
  configureDb();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer />
      </ThemeProvider>
    </ReduxProvider>
  );
}
