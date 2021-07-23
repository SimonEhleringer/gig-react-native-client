import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { PADDING_HALF } from '../config/themes';
import { useTheme } from '../hooks/useTheme';
import PlaylistStack from './PlaylistStack';
import ProfileStack from './ProfileStack';
import SongsStack from './SongsStack';

interface MainTabProps {}

export type MainTabParamList = {
  Playlists: undefined;
  Songs: undefined;
  Profile: undefined;
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
        style: {
          borderTopColor: 'black',
          paddingBottom: PADDING_HALF,
          backgroundColor: 'black',
        },
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
        name='Profile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='account-circle' color={color} size={size} />
          ),
          title: 'Profil',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
