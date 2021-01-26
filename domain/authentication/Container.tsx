import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default Container;
