import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PADDING_DOUBLE } from '../../config/themes';

interface FormContainerProps {}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: PADDING_DOUBLE,
  },
});

export default FormContainer;
