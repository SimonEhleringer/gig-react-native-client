import React, { useState, useRef } from 'react';
import Register from './Register';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { register } from './slice';
import withBackground from '../common/withBackground';
import { Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import { ReduxState } from '../../config/store';
import { useTheme } from '../../hooks/useTheme';

interface RegisterContainerProps {}

const RegisterContainer: React.FC<RegisterContainerProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const emailInputRef = useRef<Input>(null);
  const passwordInputRef = useRef<Input>(null);
  const confirmedPasswordInputRef = useRef<Input>(null);

  const state = useSelector((state: ReduxState) => state.authentication);
  const errors = state.errors;
  const loading = state.loading;

  const handleUsernameChanged = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handleUsernameSubmitEditing = () => {
    emailInputRef.current?.focus();
  };

  const handleEmailChanged = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleEmailSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };

  const handlePasswordChanged = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handlePasswordSubmitEditing = () => {
    confirmedPasswordInputRef.current?.focus();
  };

  const handleConfirmedPasswordChanged = (newConfirmedPassword: string) => {
    setConfirmedPassword(newConfirmedPassword);
  };

  const handleLoginButtonPress = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    Keyboard.dismiss();

    dispatch(register({ username, email, password, confirmedPassword }));
  };

  return (
    <Register
      theme={theme}
      emailInputRef={emailInputRef}
      passwordInputRef={passwordInputRef}
      confirmedPasswordInputRef={confirmedPasswordInputRef}
      handleUsernameChanged={handleUsernameChanged}
      handleUsernameSubmitEditing={handleUsernameSubmitEditing}
      handleEmailChanged={handleEmailChanged}
      handleEmailSubmitEditing={handleEmailSubmitEditing}
      handlePasswordChanged={handlePasswordChanged}
      handlePasswordSubmitEditing={handlePasswordSubmitEditing}
      handleConfirmedPasswordChanged={handleConfirmedPasswordChanged}
      handleLoginButtonPress={handleLoginButtonPress}
      handleRegister={handleRegister}
      errors={errors}
      loading={loading}
    />
  );
};

export default withBackground(RegisterContainer);
