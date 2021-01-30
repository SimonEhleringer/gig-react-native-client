import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';

interface SongsScreenProps {}

const SongsScreen: React.FC<SongsScreenProps> = ({}) => {
  return (
    <ScrollView>
      <View>
        <Text>lol</Text>
      </View>
    </ScrollView>
  );
};

export default withBottomRoundedCorners(withBackground(SongsScreen));
