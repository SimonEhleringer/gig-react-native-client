import React from 'react';
import { ScrollView } from 'react-native';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import AuthenticationSettingsContainer from '../domain/authentication/settings/AuthenticationSettingsContainer';
import GreyBackgroundView from '../domain/common/GreyBackgroundView';

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({}) => {
  return (
    <GreyBackgroundView>
      <ScrollView>
        <AuthenticationSettingsContainer />
      </ScrollView>
    </GreyBackgroundView>
  );
};

export default withBottomRoundedCorners(withBackground(SettingsScreen));
