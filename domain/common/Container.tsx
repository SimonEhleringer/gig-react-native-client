import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PADDING } from '../../config/themes';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: PADDING,
  },
});

export default Container;
