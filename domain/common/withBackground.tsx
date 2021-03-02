import React from 'react';
import { StatusBar, ImageBackground, StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

function withBackground<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const theme = useTheme();

    return (
      <>
        <StatusBar
          backgroundColor='transparent'
          translucent={true}
          barStyle='dark-content'
        />

        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../assets/start-background.jpg')}
        >
          <View
            style={[
              styles.backgroundOverlay,
              { backgroundColor: theme.colors?.transparentBackgroundColor },
            ]}
          >
            <Component {...props} />
          </View>
        </ImageBackground>
      </>
    );
  };
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  backgroundOverlay: {
    flex: 1,
  },
});

export default withBackground;
