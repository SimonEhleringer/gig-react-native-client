import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './config/store';
import NavigationContainer from './navigation/NavigationContainer';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './config/themes';
import api from './config/api';
import { addRefreshRequestInterceptor } from './config/apiRefreshRequestInterceptor';

export default function App() {
  addRefreshRequestInterceptor(api);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer />
      </ThemeProvider>
    </ReduxProvider>
  );
}
