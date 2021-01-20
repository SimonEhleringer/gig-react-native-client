import React, { useState } from 'react';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { login } from './authenticationSlice';

interface LoginContainerProps {}

// !!!! Eventuell mit useNavigation Hook machen das ganze

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChanged = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChanged = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  const handleRegisterButtonPress = () => {};

  return (
    <Login
      email={email}
      password={password}
      handleEmailChanged={handleEmailChanged}
      handlePasswordChanged={handlePasswordChanged}
      handleLogin={handleLogin}
    />
  );
};

export default LoginContainer;
