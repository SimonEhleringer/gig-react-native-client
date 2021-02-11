import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';

interface SettingsStackProps {}

export type SettingsStackParamList = {
  Settings: undefined;
};

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsStack: React.FC<SettingsStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: 'Einstellungen',
          headerStyle: {
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
