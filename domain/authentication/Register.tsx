import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Container from './Container';
import Input from './Input';
import Button from './Button';
import BottomSection from './BottomSection';

interface RegisterProps {
  email: string;
  password: string;
  handleUsernameChanged: (newUsername: string) => void;
  handleEmailChanged: (newEmail: string) => void;
  handlePasswordChanged: (newPassword: string) => void;
  handleConfirmedPasswordChanged: (newConfirmedPassword: string) => void;
  handleLoginButtonPress: () => void;
  handleRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({
  email,
  password,
  handleUsernameChanged,
  handleEmailChanged,
  handlePasswordChanged,
  handleConfirmedPasswordChanged,
  handleLoginButtonPress,
  handleRegister,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <View style={styles.registerForm}>
        <View>
          <ScrollView keyboardShouldPersistTaps='always'>
            <Input
              leftIcon={{
                type: 'material-icons',
                name: 'person',
                color: '#6F7278',
              }}
              placeholder='Benutzername'
              onChangeText={(val) => handleUsernameChanged(val)}
            />

            <Input
              leftIcon={{
                type: 'material-icons',
                name: 'email',
                color: '#6F7278',
              }}
              placeholder='E-Mail'
              onChangeText={(val) => handleEmailChanged(val)}
            />

            <Input
              leftIcon={{
                type: 'material-icons',
                name: 'lock',
                color: '#6F7278',
              }}
              placeholder='Passwort'
              onChangeText={(val) => handlePasswordChanged(val)}
              secureTextEntry={true}
            />

            <Input
              leftIcon={{
                type: 'material-icons',
                name: 'lock',
                color: '#6F7278',
              }}
              placeholder='Passwort wiederholen'
              onChangeText={(val) => handleConfirmedPasswordChanged(val)}
              secureTextEntry={true}
            />

            <Button title='Registrieren' onPress={handleRegister} />
          </ScrollView>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <BottomSection
          text='Du hast schon einen Account?'
          buttonTitle='Anmelden'
          buttonPress={handleLoginButtonPress}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  registerForm: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  bottomSection: {
    width: '100%',
  },
});

export default Register;
