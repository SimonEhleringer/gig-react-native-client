import React from 'react';
import { StatusBar, ImageBackground, StyleSheet, View } from 'react-native';

function withBackground<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
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
          <View style={styles.backgroundOverlay}>
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
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
});

export default withBackground;
