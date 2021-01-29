import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  FullTheme,
  Text,
} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Stat from './Stat';
import Container from '../common/Container';
import Paper from '../common/Paper';
import { MARGIN, MARGIN_HALF, PADDING_DOUBLE } from '../../config/themes';

interface AuthenticationSettingsProps {
  theme: Partial<FullTheme>;
  username: string;
  handleLogout: () => void;
}

const AuthenticationSettings: React.FC<AuthenticationSettingsProps> = ({
  theme,
  username,
  handleLogout,
}) => {
  return (
    <Container>
      <Paper>
        <View style={styles.avatarAndStatsContainer}>
          <Avatar
            containerStyle={styles.avatarContainer}
            size='large'
            rounded
            title={username.charAt(0)}
            activeOpacity={1}
            overlayContainerStyle={{
              backgroundColor: theme.colors?.secondary,
            }}
          />
          <View style={styles.statsContainer}>
            <Stat stat='0' statName='Songs' />
            <Stat stat='43' statName='Playlists' />
          </View>
        </View>

        <Text style={styles.username}>{username}</Text>

        <Button
          TouchableComponent={TouchableOpacity}
          type='outline'
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          title={'Abmelden'}
          onPress={handleLogout}
        />
      </Paper>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatarAndStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  avatarContainer: {
    marginBottom: MARGIN_HALF,
    backgroundColor: 'transparent',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: PADDING_DOUBLE,
    backgroundColor: 'transparent',
  },
  username: {
    marginVertical: MARGIN_HALF,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainerStyle: {
    marginVertical: MARGIN_HALF,
  },
  buttonStyle: {
    borderWidth: 2,
  },
});

export default AuthenticationSettings;
