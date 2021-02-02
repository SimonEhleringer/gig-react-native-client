import React, { RefObject } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Input, FullTheme } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Container from './components/Container';
import Button from './components/Button';
import BottomSection from './BottomSection';
import Errors from '../common/Errors';
import { MARGIN } from '../../config/themes';

interface LoginProps {
  theme: Partial<FullTheme>;
  passwordInputRef: RefObject<Input>;
  handleEmailChanged: (newEmail: string) => void;
  handleEmailSubmitEditing: () => void;
  handlePasswordChanged: (newPassword: string) => void;
  handleLogin: () => void;
  handleRegisterButtonPress: () => void;
  errors: string[];
  loading: boolean;
}

const Login: React.FC<LoginProps> = ({
  theme,
  passwordInputRef,
  handleEmailChanged,
  handleEmailSubmitEditing,
  handlePasswordChanged,
  handleLogin,
  handleRegisterButtonPress,
  errors,
  loading,
}) => {
  return (
    <Container>
      <View>
        <HideWithKeyboard>
          <Image
            source={require('../../assets/gig-logo-grey.png')}
            style={styles.image}
            resizeMode='center'
          />
        </HideWithKeyboard>
      </View>

      <View style={styles.loginForm}>
        <View>
          <ScrollView keyboardShouldPersistTaps='always'>
            <Input
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
              onChangeText={(val) => handlePasswordChanged(val)}
              placeholder='Passwort'
              secureTextEntry
              onSubmitEditing={handleLogin}
            />

            <Button title='Anmelden' onPress={handleLogin} loading={loading} />

            <HideWithKeyboard>
              <Errors errors={errors} />
            </HideWithKeyboard>
          </ScrollView>
        </View>
      </View>

      <View style={styles.registerSection}>
        <BottomSection
          text='Du hast noch keinen Account?'
          buttonTitle='Registrieren'
          buttonPress={handleRegisterButtonPress}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: MARGIN,
    width: 150,
    height: 150,
  },
  loginForm: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  registerSection: {
    width: '100%',
  },
  loginFormContent: {
    marginVertical: MARGIN,
  },
});

export default Login;
