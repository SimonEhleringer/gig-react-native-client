import React, { useState } from 'react';
import Register from './Register';
import { useDispatch } from 'react-redux';
import {} from './authenticationSlice';

interface RegisterContainerProps {}

const RegisterContainer: React.FC<RegisterContainerProps> = ({}) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChanged = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handleEmailChanged = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChanged = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleRegister = () => {
    //dispatch(login({ email, password }));
  };

  return (
    <Register
      email={email}
      password={password}
      handleUsernameChanged={handleUsernameChanged}
      handleEmailChanged={handleEmailChanged}
      handlePasswordChanged={handlePasswordChanged}
      handleRegister={handleRegister}
    />
  );
};

export default RegisterContainer;
