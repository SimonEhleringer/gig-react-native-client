import React, { useState } from "react";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { register } from "./authenticationSlice";

interface RegisterContainerProps {}

const RegisterContainer: React.FC<RegisterContainerProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleUsernameChanged = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handleEmailChanged = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChanged = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleConfirmedPasswordChanged = (newConfirmedPassword: string) => {
    setConfirmedPassword(newConfirmedPassword);
  };

  const handleLoginButtonPress = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    dispatch(register({ username, email, password, confirmedPassword }));
  };

  return (
    <Register
      email={email}
      password={password}
      handleUsernameChanged={handleUsernameChanged}
      handleEmailChanged={handleEmailChanged}
      handlePasswordChanged={handlePasswordChanged}
      handleConfirmedPasswordChanged={handleConfirmedPasswordChanged}
      handleLoginButtonPress={handleLoginButtonPress}
      handleRegister={handleRegister}
    />
  );
};

export default RegisterContainer;
