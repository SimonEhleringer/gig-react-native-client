import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SETTINGS_STACK_ROUTE } from './constants';
import SettingsScreen from '../screens/SettingsScreen';

interface SettingsStackProps {}

const Stack = createStackNavigator();

const SettingsStack: React.FC<SettingsStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SETTINGS_STACK_ROUTE}
        component={SettingsScreen}
        options={{ title: 'Einstellungen' }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
