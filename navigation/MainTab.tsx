import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import PlaylistStack from './PlaylistStack';
import SettingsStack from './SettingsStack';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import SongsStack from './SongsStack';

interface MainTabProps {}

export type MainTabParamList = {
  Playlists: undefined;
  Songs: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab: React.FC<MainTabProps> = ({}) => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: theme.colors?.text,
        activeTintColor: theme.colors?.primary,
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
        style: { borderTopColor: 'black' },
      }}
    >
      <Tab.Screen
        name='Playlists'
        component={PlaylistStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='queue-music' color={color} size={size} />
          ),
          title: 'Playlists',
        }}
      />
      <Tab.Screen
        name='Songs'
        component={SongsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='music-note' color={color} size={size} />
          ),
          title: 'Songs',
        }}
      />
      <Tab.Screen
        name='Settings'
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
