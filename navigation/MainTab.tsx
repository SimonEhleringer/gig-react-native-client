import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlaylistStack from './PlaylistStack';
import SettingsStack from './SettingsStack';
import { PLAYLISTS_TAB_ROUTE, SETTINGS_TAB_ROUTE } from './constants';
import { MaterialIcons } from '@expo/vector-icons';

interface MainTabProps {}

const Tab = createBottomTabNavigator();

const MainTab: React.FC<MainTabProps> = ({}) => {
  return (
    <Tab.Navigator>
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
