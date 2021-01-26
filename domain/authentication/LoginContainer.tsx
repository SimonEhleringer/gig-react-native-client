import React, { useState } from 'react';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { login } from './authenticationSlice';
import { useNavigation } from '@react-navigation/native';
import { REGISTER_STACK_ROUTE } from '../../navigation/constants';
import withBackground from '../common/withBackground';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';

interface LoginContainerProps {}

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const state = useSelector((state: ReduxState) => state.authentication);
  const errors = state.errors;

  const handleEmailChanged = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChanged = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  const handleRegisterButtonPress = () => {
    navigation.navigate(REGISTER_STACK_ROUTE);
  };

  return (
    <Login
      email={email}
      password={password}
      handleEmailChanged={handleEmailChanged}
      handlePasswordChanged={handlePasswordChanged}
      handleLogin={handleLogin}
      handleRegisterButtonPress={handleRegisterButtonPress}
      errors={errors}
    />
  );
};

export default withBackground(LoginContainer);
