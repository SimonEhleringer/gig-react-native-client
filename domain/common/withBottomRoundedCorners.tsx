import { useTheme } from '../../hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

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
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flex: 1,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
});

export default withBottomRoundedCorners;
