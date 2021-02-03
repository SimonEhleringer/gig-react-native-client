import React from 'react';
import { Header as RneHeader } from 'react-native-elements';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return <RneHeader centerComponent={{ text: 'Test' }} />;
};

export default Header;
