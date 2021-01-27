import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RneButton, ButtonProps } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/useTheme';

const Button: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <RneButton
      style={styles.style}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: [theme.colors?.secondary, theme.colors?.primary],
        start: { x: 0, y: 1 },
        end: { x: 1, y: 1 },
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  style: {
    marginVertical: 10,
  },
});

export default Button;
