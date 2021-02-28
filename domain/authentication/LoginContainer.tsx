import React, { useState, useRef } from 'react';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { login, setErrors } from './slice';
import { useNavigation } from '@react-navigation/native';
import withBackground from '../common/withBackground';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { Keyboard, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { useTheme } from '../../hooks/useTheme';
import { AuthenticationStackParamList } from '../../navigation/AuthenticationStack';
import { StackNavigationProp } from '@react-navigation/stack';

interface LoginContainerProps {}

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    AuthenticationStackParamList,
    'Login'
  > = useNavigation();
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordInputRef = useRef<Input>(null);

  const state = useSelector((state: ReduxState) => state.authentication);
  const errors = state.errors;
  const loading = state.loading;

  const handleEmailChanged = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleEmailSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };

  const handlePasswordChanged = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleLogin = () => {
    Keyboard.dismiss();

    dispatch(login({ email, password }));
  };

  const handleRegisterButtonPress = () => {
    navigation.navigate('Register');
  };

  return (
    <Login
      theme={theme}
      passwordInputRef={passwordInputRef}
      handleEmailChanged={handleEmailChanged}
      handleEmailSubmitEditing={handleEmailSubmitEditing}
      handlePasswordChanged={handlePasswordChanged}
      handleLogin={handleLogin}
      handleRegisterButtonPress={handleRegisterButtonPress}
      errors={errors}
      loading={loading}
    />
  );
};

export default withBackground(LoginContainer);
