import React, { RefObject } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { FullTheme, Input } from 'react-native-elements';
import FormContainer from '../common/FormContainer';
import Button from '../common/FormButton';
import BottomSection from './BottomSection';
import Errors from '../common/Errors';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { MARGIN } from '../../config/themes';

interface RegisterProps {
  theme: Partial<FullTheme>;
  emailInputRef: RefObject<Input>;
  passwordInputRef: RefObject<Input>;
  confirmedPasswordInputRef: RefObject<Input>;
  handleUsernameChanged: (newUsername: string) => void;
  handleUsernameSubmitEditing: () => void;
  handleEmailChanged: (newEmail: string) => void;
  handleEmailSubmitEditing: () => void;
  handlePasswordChanged: (newPassword: string) => void;
  handlePasswordSubmitEditing: () => void;
  handleConfirmedPasswordChanged: (newConfirmedPassword: string) => void;
  handleLoginButtonPress: () => void;
  handleRegister: () => void;
  errors: string[];
  loading: boolean;
}

const Register: React.FC<RegisterProps> = ({
  theme,
  emailInputRef,
  passwordInputRef,
  confirmedPasswordInputRef,
  handleUsernameChanged,
  handleUsernameSubmitEditing,
  handleEmailChanged,
  handleEmailSubmitEditing,
  handlePasswordChanged,
  handlePasswordSubmitEditing,
  handleConfirmedPasswordChanged,
  handleLoginButtonPress,
  handleRegister,
  errors,
  loading,
}) => {
  return (
    <FormContainer>
      <View style={styles.registerForm}>
        <View>
          <ScrollView keyboardShouldPersistTaps='always'>
            <Input
              inputStyle={{ color: theme.colors?.text }}
              style={styles.loginFormContent}
              leftIcon={{
                type: 'material-icons',
                name: 'person',
                color: theme.colors?.text,
              }}
              placeholder='Benutzername'
              onChangeText={(val) => handleUsernameChanged(val)}
              returnKeyType='next'
              blurOnSubmit={false}
              onSubmitEditing={handleUsernameSubmitEditing}
            />

            <Input
              ref={emailInputRef}
              inputStyle={{ color: theme.colors?.text }}
              style={styles.loginFormContent}
              leftIcon={{
                type: 'material-icons',
                name: 'email',
                color: theme.colors?.text,
              }}
              placeholder='E-Mail'
              onChangeText={(val) => handleEmailChanged(val)}
              returnKeyType='next'
              blurOnSubmit={false}
              keyboardType='email-address'
              onSubmitEditing={handleEmailSubmitEditing}
            />

            <Input
              ref={passwordInputRef}
              inputStyle={{ color: theme.colors?.text }}
              style={styles.loginFormContent}
              leftIcon={{
                type: 'material-icons',
                name: 'lock',
                color: theme.colors?.text,
              }}
              placeholder='Passwort'
              onChangeText={(val) => handlePasswordChanged(val)}
              secureTextEntry={true}
              returnKeyType='next'
              blurOnSubmit={false}
              onSubmitEditing={handlePasswordSubmitEditing}
            />

            <Input
              ref={confirmedPasswordInputRef}
              inputStyle={{ color: theme.colors?.text }}
              style={styles.loginFormContent}
              leftIcon={{
                type: 'material-icons',
                name: 'lock',
                color: theme.colors?.text,
              }}
              placeholder='Passwort wiederholen'
              onChangeText={(val) => handleConfirmedPasswordChanged(val)}
              secureTextEntry={true}
              onSubmitEditing={handleRegister}
            />

            <Button
              title='Registrieren'
              onPress={handleRegister}
              loading={loading}
            />

            <HideWithKeyboard>
              <Errors errors={errors} />
            </HideWithKeyboard>
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
    </FormContainer>
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
  loginFormContent: {
    marginVertical: MARGIN,
  },
});

export default Register;
