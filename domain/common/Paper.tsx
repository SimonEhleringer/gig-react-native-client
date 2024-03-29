import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BORDER_RADIUS, MARGIN, PADDING } from '../../config/themes';
import { useTheme } from '../../hooks/useTheme';

interface PaperProps {
  hasPadding?: boolean;
  hasMarginBottom?: boolean;
}

const Paper: React.FC<PaperProps> = ({
  children,
  hasPadding,
  hasMarginBottom,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.paper,
        {
          // backgroundColor: theme.colors?.white,
          backgroundColor: theme.colors?.paperBackgroundColor,
          padding: hasPadding ? PADDING : 0,
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
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
});

export default Paper;
