import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import Errors from './Errors';

interface LoadingAndErrorsProps {
  loading: boolean;
  errors: string[];
}

const LoadingAndErrors: React.FC<LoadingAndErrorsProps> = ({
  children,
  loading,
  errors,
}) => {
  const theme = useTheme();

  return (
    <>
      {loading || errors.length > 0 ? (
        <View style={styles.loadingAndErrorsWrapper}>
          {loading && (
            <ActivityIndicator
              animating={true}
              color={theme.colors?.primary}
              size='large'
            />
          )}

          {errors.length > 0 && <Errors errors={errors} />}
        </View>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingAndErrorsWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingAndErrors;
