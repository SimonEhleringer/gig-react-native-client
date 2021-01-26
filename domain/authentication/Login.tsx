import React, { useRef } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Container from './Container';
import Input from './Input';
import LoginButton from './Button';
import BottomSection from './BottomSection';

interface LoginProps {
  email: string;
  password: string;
  handleEmailChanged: (newEmail: string) => void;
  handlePasswordChanged: (newPassword: string) => void;
  handleLogin: () => void;
  handleRegisterButtonPress: () => void;
  errors: string[];
}

const Login: React.FC<LoginProps> = ({
  email,
  password,
  handleEmailChanged,
  handlePasswordChanged,
  handleLogin,
  handleRegisterButtonPress,
  errors,
}) => {
  // const passwordInputRef = useRef();

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
              leftIcon={{
                type: 'material-icons',
                name: 'email',
                color: '#6F7278',
              }}
              placeholder='E-Mail'
              onChangeText={(val) => handleEmailChanged(val)}
              returnKeyType='next'
              keyboardType='email-address'
            />
            <Input
              leftIcon={{
                type: 'material-icons',
                name: 'lock',
                color: '#6F7278',
              }}
              placeholder='Passwort'
              secureTextEntry={true}
              onChangeText={(val) => handlePasswordChanged(val)}
              // ref={passwordInputRef}
            />

            <LoginButton title='Anmelden' onPress={handleLogin} />

            {errors.map((error, index) => {
              return <Text key={index}>{error}</Text>;
            })}
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
    marginTop: 10,
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
});

export default Login;
