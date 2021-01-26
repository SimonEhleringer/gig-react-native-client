import React from 'react';
import { configureDb } from './config/db';
import { Provider as ReduxProvider } from 'react-redux';
import store from './config/store';
import NavigationContainer from './navigation/NavigationContainer';
import { ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    primary: '#79C3EB',
    secondary: '#858CEB',
    grey0: '#2B2D33',
  },
  Button: {
    buttonStyle: {
      borderRadius: 50,
    },
  },
};

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
