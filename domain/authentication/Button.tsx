import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RneButton, ButtonProps } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <RneButton
      style={styles.style}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#858CEB', '#79C3EB'],
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
