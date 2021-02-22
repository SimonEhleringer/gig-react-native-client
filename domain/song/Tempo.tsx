import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MARGIN_HALF, PADDING, PADDING_HALF } from '../../config/themes';
import { useTheme } from '../../hooks/useTheme';

interface TempoProps {
  tempo: number;
  isMetronomeOn: boolean;
}

function interval(this: any, duration: number, fn: () => void) {
  var _this = this;
  this.baseline = undefined;

  this.run = function () {
    if (_this.baseline === undefined) {
      _this.baseline = new Date().getTime();
    }
    fn();
    var end = new Date().getTime();
    _this.baseline += duration;

    var nextTick = duration - (end - _this.baseline);
    if (nextTick < 0) {
      nextTick = 0;
    }

    _this.timer = setTimeout(function () {
      _this.run(end);
    }, nextTick);
  };

  this.stop = function () {
    clearTimeout(_this.timer);
  };
}

const Tempo: React.FC<TempoProps> = ({ tempo, isMetronomeOn }) => {
  const theme = useTheme();

  const [xValue, setXValue] = useState(new Animated.Value(0));
  const [isLeft, setIsLeft] = useState(true);
  const [isMetronomeShwon, setIsMetronomeShown] = useState(false);

  const [time, setTime] = useState(60000 / tempo);

  useEffect(() => {
    // Only activate metronome, if wanted
    if (!isMetronomeOn) {
      return;
    }

    const timer = new (interval as any)(time, () => {
      setIsLeft((prev) => !prev);
    });

    timer.run();
    return () => {
      timer.stop();
    };
  }, [isMetronomeOn]);

  useEffect(() => {
    Animated.timing(xValue, {
      toValue: isLeft ? 23 : 0,
      duration: time / 5,
      useNativeDriver: false,
    }).start();
  }, [isLeft]);

  useEffect(() => {
    if (isMetronomeOn) {
      setTimeout(() => setIsMetronomeShown(true), 500);
    } else {
      setIsMetronomeShown(false);

      setIsLeft(true);
    }
  }, [isMetronomeOn]);

  return (
    <View style={styles.container}>
      {isMetronomeShwon && (
        <View style={styles.bpmIndicator}>
          <Animated.View
            style={[
              styles.bpmIndicatorPoint,
              { backgroundColor: theme.colors?.primary, left: xValue },
            ]}
          />
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
    alignItems: 'center',
  },
  bpmIndicator: {
    margin: MARGIN_HALF,
    flexDirection: 'row',
    width: 35,
  },
  bpmIndicatorPoint: {
    borderRadius: 100,
    padding: 6,
  },
});

export default Tempo;
