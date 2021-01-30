import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { MARGIN_HALF, PADDING, PADDING_HALF } from '../../../config/themes';
import { useTheme } from '../../../hooks/useTheme';

interface TempoProps {
  tempo: number;
}

const Tempo: React.FC<TempoProps> = ({ tempo }) => {
  const theme = useTheme();

  return (
    <View>
      <View style={styles.bpmIndicatorContainer}>
        <View style={styles.bpmIndicator}>
          <View
            style={[
              styles.bpmIndicatorPoint,
              { backgroundColor: theme.colors?.success },
            ]}
          />
          <View
            style={[
              styles.bpmIndicatorPoint,
              { backgroundColor: theme.colors?.success },
            ]}
          />
        </View>
      </View>

      <Text>{tempo} BPM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bpmIndicatorContainer: {
    margin: MARGIN_HALF,
    alignItems: 'center',
  },
  bpmIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 35,
  },
  bpmIndicatorPoint: {
    borderRadius: 100,
    padding: 6,
  },
});

export default Tempo;
