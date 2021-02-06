import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '../../hooks/useTheme';

interface ErrorsProps {
  errors: string[];
}

const Errors: React.FC<ErrorsProps> = ({ errors }) => {
  const theme = useTheme();

  return (
    <>
      {errors.length > 0 && (
        <View style={styles.container}>
          {errors.map((error, index) => {
            return (
              <Text
                key={index}
                style={[styles.error, { color: theme.colors?.error }]}
              >
                {error}
              </Text>
            );
          })}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  error: {
    margin: 3,
    textAlign: 'center',
  },
});

export default Errors;
