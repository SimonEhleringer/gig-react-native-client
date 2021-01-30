import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import PlaylistStack from './PlaylistStack';
import SettingsStack from './SettingsStack';
import {
  PLAYLISTS_TAB_ROUTE,
  SETTINGS_TAB_ROUTE,
  SONGS_TAB_ROUTE,
} from './constants';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import SongsStack from './SongsStack';

interface MainTabProps {}

const Tab = createBottomTabNavigator();

const MainTab: React.FC<MainTabProps> = ({}) => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      // tabBar={(props) => (
      //   <View>
      //     <View
      //       style={{
      //         height: 20,
      //         backgroundColor: 'black',
      //       }}
      //     >
      //       <View
      //         style={{
      //           flex: 1,
      //           backgroundColor: 'white',
      //           borderBottomRightRadius: 20,
      //           borderBottomLeftRadius: 20,
      //           overflow: 'hidden',
      //         }}
      //       />
      //     </View>
      //     <BottomTabBar {...props} />
      //   </View>
      // )}
      tabBarOptions={{
        inactiveTintColor: theme.colors?.text,
        activeTintColor: theme.colors?.primary,
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
        style: { borderTopColor: 'black' },
      }}
      // tabBarOptions={{
      //   activeBackgroundColor: theme.colors?.secondary,
      //   inactiveBackgroundColor: theme.colors?.secondary,
      //   activeTintColor: theme.colors?.primary,
      //   inactiveTintColor: theme.colors?.white,
      // }}
    >
      <Tab.Screen
        name={PLAYLISTS_TAB_ROUTE}
        component={PlaylistStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='queue-music' color={color} size={size} />
          ),
          title: 'Playlists',
        }}
      />
      <Tab.Screen
        name={SONGS_TAB_ROUTE}
        component={SongsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='music-note' color={color} size={size} />
          ),
          title: 'Songs',
        }}
      />
      <Tab.Screen
        name={SETTINGS_TAB_ROUTE}
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='settings' color={color} size={size} />
          ),
          title: 'Einstellungen',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
