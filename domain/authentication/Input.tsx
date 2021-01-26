import React from 'react';
import { Input as RneInput, InputProps } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const Input: React.FC<InputProps> = (props) => {
  return (
    <RneInput inputStyle={styles.inputStyle} style={styles.style} {...props} />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#6F7278',
  },
  style: {
    marginVertical: 10,
  },
});

export default Input;
