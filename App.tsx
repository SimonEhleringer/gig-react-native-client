import React, { useEffect } from 'react';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import store, { persistor } from './config/store';
import AppStack from './navigation/AppStack';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './config/themes';
import api from './config/api';
import { addRefreshRequestInterceptor } from './config/apiRefreshRequestInterceptor';
import { addJwtTokenInterceptor } from './config/apiAddJwtTokenInterceptor';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
import { loadPlaylists } from './domain/playlist/slice';

export default function App() {
  useEffect(() => {
    addRefreshRequestInterceptor(api);
    addJwtTokenInterceptor(api);
  }, []);

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <AppStack />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
