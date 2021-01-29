import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BORDER_RADIUS, MARGIN, PADDING } from '../../config/themes';
import { useTheme } from '../../hooks/useTheme';

interface PaperProps {
  hasMarginBottom?: boolean;
}

const Paper: React.FC<PaperProps> = ({ children, hasMarginBottom }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.paper,
        {
          backgroundColor: theme.colors?.white,
          marginBottom: hasMarginBottom ? MARGIN : 0,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  paper: {
    padding: PADDING,
    borderRadius: BORDER_RADIUS,
  },
});

export default Paper;
