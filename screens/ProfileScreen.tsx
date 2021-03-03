import React from 'react';
import { ScrollView } from 'react-native';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import ProfileContainer from '../domain/authentication/profile/AuthenticationSettingsContainer';
import GreyBackgroundView from '../domain/common/GreyBackgroundView';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  return (
    <GreyBackgroundView>
      <ScrollView>
        <ProfileContainer />
      </ScrollView>
    </GreyBackgroundView>
  );
};

export default withBottomRoundedCorners(withBackground(ProfileScreen));
