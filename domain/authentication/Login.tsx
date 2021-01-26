import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { ThemeContext, Input, Button, Text } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import withBackground from '../common/withBackground';

interface LoginProps {
  email: string;
  password: string;
  handleEmailChanged: (newEmail: string) => void;
  handlePasswordChanged: (newPassword: string) => void;
  handleLogin: () => void;
  handleRegisterButtonPress: () => void;
}

const Login: React.FC<LoginProps> = ({
  email,
  password,
  handleEmailChanged,
  handlePasswordChanged,
  handleLogin,
  handleRegisterButtonPress,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HideWithKeyboard>
          <Image
            source={require('../../assets/gig-logo-grey.png')}
            style={styles.image}
            resizeMode='center'
          />
        </HideWithKeyboard>
      </View>

      <View style={styles.loginForm}>
        <Input
          inputStyle={styles.inputStyle}
          style={styles.loginFormContent}
          leftIcon={{
            type: 'material-icons',
            name: 'email',
            color: '#6F7278',
          }}
          placeholder='E-Mail'
          onChangeText={(val) => handleEmailChanged(val)}
        />
        <Input
          inputStyle={styles.inputStyle}
          style={styles.loginFormContent}
          leftIcon={{
            type: 'material-icons',
            name: 'lock',
            color: '#6F7278',
          }}
          placeholder='Passwort'
          secureTextEntry={true}
          onChangeText={(val) => handlePasswordChanged(val)}
        />

        <Button
          style={styles.loginFormContent}
          title='Anmelden'
          onPress={handleLogin}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#858CEB', '#79C3EB'],
            start: { x: 0, y: 1 },
            end: { x: 1, y: 1 },
          }}
        />
      </View>

      <View style={styles.registerSection}>
        <HideWithKeyboard>
          <Text style={styles.registerText}>Du hast noch keinen Account?</Text>
          <Button
            TouchableComponent={TouchableOpacity}
            type='outline'
            containerStyle={{ marginVertical: 5 }}
            buttonStyle={{
              borderWidth: 2,
            }}
            title='Registrieren'
            onPress={handleRegisterButtonPress}
          />
        </HideWithKeyboard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
  },
  loginFormContent: {
    marginVertical: 10,
  },
  registerSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  registerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6F7278',
    marginVertical: 5,
  },
  inputStyle: {
    color: '#6F7278',
  },
});

export default Login;
