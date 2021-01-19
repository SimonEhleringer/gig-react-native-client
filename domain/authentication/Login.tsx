import React, { useContext } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { ThemeContext, Input, Button } from 'react-native-elements';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors?.white }]}>
      <StatusBar
        backgroundColor={theme.colors?.white}
        barStyle='dark-content'
      />
      <View style={styles.loginForm}>
        <Input style={styles.loginFormContent} placeholder='E-Mail' />
        <Input style={styles.loginFormContent} placeholder='Passwort' />

        <Button containerStyle={styles.loginFormContent} title='Einloggen' />

        <Button
          containerStyle={styles.loginFormContent}
          title='Registieren'
          type='outline'
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
  loginForm: {
    width: '80%',
  },
  loginFormContent: {
    margin: 2,
  },
});

export default Login;
