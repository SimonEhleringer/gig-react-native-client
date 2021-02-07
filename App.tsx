import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './config/store';
import NavigationContainer from './navigation/NavigationContainer';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './config/themes';
import api from './config/api';
import { addRefreshRequestInterceptor } from './config/apiRefreshRequestInterceptor';
import { addJwtTokenInterceptor } from './config/apiAddJwtTokenInterceptor';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  addRefreshRequestInterceptor(api);
  addJwtTokenInterceptor(api);

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer />
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
