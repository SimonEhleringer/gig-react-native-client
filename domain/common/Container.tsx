import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PADDING } from '../../config/themes';

interface ContainerProps {
  hasBottomPadding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  hasBottomPadding,
}) => {
  return (
    <View
      style={[styles.container, hasBottomPadding ? styles.bottomPadding : {}]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: PADDING,
  },
  bottomPadding: {
    paddingBottom: PADDING,
  },
});

export default Container;
