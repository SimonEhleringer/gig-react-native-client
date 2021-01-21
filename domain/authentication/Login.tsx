import React, { useContext } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { ThemeContext, Input, Button } from "react-native-elements";

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
    <View style={[styles.container, { backgroundColor: theme.colors?.white }]}>
      <StatusBar
        backgroundColor={theme.colors?.white}
        barStyle="dark-content"
      />
      <View style={styles.loginForm}>
        <Input
          style={styles.loginFormContent}
          placeholder="E-Mail"
          onChangeText={(val) => handleEmailChanged(val)}
        />
        <Input
          style={styles.loginFormContent}
          placeholder="Passwort"
          onChangeText={(val) => handlePasswordChanged(val)}
        />

        <Button
          containerStyle={styles.loginFormContent}
          title="Einloggen"
          onPress={handleLogin}
        />

        <Button
          containerStyle={styles.loginFormContent}
          title="Registieren"
          type="outline"
          onPress={handleRegisterButtonPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    width: "80%",
  },
  loginFormContent: {
    margin: 2,
  },
});

export default Login;
