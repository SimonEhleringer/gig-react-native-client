import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import { useTheme } from '../hooks/useTheme';

interface ProfileStackProps {}

export type ProfileStackParamList = {
  Profile: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC<ProfileStackProps> = ({}) => {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profil',
          headerStyle: {
            elevation: 0,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors?.lightGrey,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
