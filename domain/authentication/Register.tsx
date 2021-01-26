import React, { useContext } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { ThemeContext, Input, Button } from 'react-native-elements';

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
    <View style={[styles.container]}>
      <View style={styles.registerForm}>
        <Input
          style={styles.registerFormContent}
          placeholder='Benutzername'
          onChangeText={(val) => handleUsernameChanged(val)}
        />

        <Input
          style={styles.registerFormContent}
          placeholder='E-Mail'
          onChangeText={(val) => handleEmailChanged(val)}
        />
        <Input
          style={styles.registerFormContent}
          placeholder='Passwort'
          onChangeText={(val) => handlePasswordChanged(val)}
        />
        <Input
          style={styles.registerFormContent}
          placeholder='Passwort wiederholen'
          onChangeText={(val) => handleConfirmedPasswordChanged(val)}
        />

        <Button
          containerStyle={styles.registerFormContent}
          title='Registrieren'
          onPress={handleRegister}
        />

        <Button
          containerStyle={styles.registerFormContent}
          title='Ich habe schon einen Account'
          type='outline'
          onPress={handleLoginButtonPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerForm: {
    width: '80%',
  },
  registerFormContent: {
    margin: 2,
  },
});

export default Register;
