import React from 'react';
import { ScrollView } from 'react-native';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AuthenticationSettingsContainer from '../domain/authentication/settings/AuthenticationSettingsContainer';

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({}) => {
  return (
    <ScrollView>
      <AuthenticationSettingsContainer />
    </ScrollView>
  );
};

export default withBottomRoundedCorners(withBackground(SettingsScreen));
