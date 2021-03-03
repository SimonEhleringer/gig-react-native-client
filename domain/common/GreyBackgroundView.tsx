import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

interface GreyBackgroundViewProps {}

const GreyBackgroundView: React.FC<GreyBackgroundViewProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor='transparent'
        translucent={true}
        barStyle='dark-content'
      />
      <View style={[styles.root, { backgroundColor: theme.colors?.lightGrey }]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default GreyBackgroundView;
