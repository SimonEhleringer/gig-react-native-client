import { useTheme } from '../../hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BORDER_RADIUS } from '../../config/themes';

function withBottomRoundedCorners<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const theme = useTheme();

    return (
      <View
        style={[
          styles.lowerContainer,
          { backgroundColor: theme.colors?.black },
        ]}
      >
        <View style={styles.higherContainer}>
          <View
            style={[
              styles.background,
              { backgroundColor: theme.colors?.white },
            ]}
          >
            <Component {...props} />
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  lowerContainer: {
    flex: 1,
  },
  higherContainer: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    flex: 1,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
});

export default withBottomRoundedCorners;
