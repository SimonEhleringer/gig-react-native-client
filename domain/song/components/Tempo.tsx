import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { MARGIN_HALF, PADDING, PADDING_HALF } from '../../../config/themes';
import { useTheme } from '../../../hooks/useTheme';

interface TempoProps {
  tempo: number;
  isMetronomeOn: boolean;
}

const Tempo: React.FC<TempoProps> = ({ tempo, isMetronomeOn }) => {
  const theme = useTheme();

  const [isLeftIndicatorActive, setIsLeftIndicatorActive] = useState(true);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setIsLeftIndicatorActive(!isLeftIndicatorActive);
    // }, 60000 / (tempo * 1.1));
    // return () => {
    //   clearInterval(interval);
    // };
  });

  return (
    <View style={styles.container}>
      {isMetronomeOn && (
        <View style={styles.bpmIndicatorContainer}>
          <View style={styles.bpmIndicator}>
            <View
              style={[
                styles.bpmIndicatorPoint,
                {
                  backgroundColor: isLeftIndicatorActive
                    ? theme.colors?.primary
                    : 'transparent',
                },
              ]}
            />
            <View
              style={[
                styles.bpmIndicatorPoint,
                {
                  backgroundColor: isLeftIndicatorActive
                    ? 'transparent'
                    : theme.colors?.secondary,
                },
              ]}
            />
          </View>
        </View>
      )}

      <ListItem.Subtitle>{tempo} BPM</ListItem.Subtitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
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
