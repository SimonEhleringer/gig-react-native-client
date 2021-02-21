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

// class interval2 {
//   baseline: number | undefined = undefined;
//   duration: number;
//   fn: () => void;
//   timer: any;

//   constructor(duration: number, fn: () => void) {
//     this.duration = duration;
//     this.fn = fn;
//     //this.timer = () => {};
//   }

//   run() {
//     if (this.baseline === undefined) {
//       this.baseline = new Date().getTime();
//     }
//     this.fn();
//     var end = new Date().getTime();
//     this.baseline += this.duration;

//     var nextTick = this.duration - (end - this.baseline);
//     if (nextTick < 0) {
//       nextTick = 0;
//     }

//     this.timer = setTimeout(function () {
//       this.run(end);
//     }, nextTick);
//   }

// }

const Tempo: React.FC<TempoProps> = ({ tempo, isMetronomeOn }) => {
  const theme = useTheme();

  //const [timer, setTimer] = useState(new NanoTimer());

  const [xValue, setXValue] = useState(new Animated.Value(0));
  const [isLeft, setIsLeft] = useState(true);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setIsLeftIndicatorActive(!isLeftIndicatorActive);
    // }, 60000 / (tempo * 1.1));
    // return () => {
    //   clearInterval(interval);
    //

    //};

    const time = 60000 / tempo;

    // const interval = setInterval(() => {
    //   setIsLeft((left) => !left);
    // }, time);

    // return () => {
    //   clearInterval(interval);
    // };

    const timer = new (interval as any)(time, () => {
      setIsLeft((left) => !left);
    });

    timer.run();

    return () => {
      timer.stop();
    };
  }, []);

  // useEffect(() => {
  //   if (isMetronomeOn) {
  //     moveAnimation();
  //   } else {
  //     xValue.stopAnimation();
  //   }
  // }, [isMetronomeOn]);

  const moveAnimation = () => {
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(xValue, {
    //       toValue: 23,
    //       duration: 100,
    //       useNativeDriver: false,
    //       easing: Easing.ease,
    //       delay: (60000 / tempo - 100) * 0.98 * 0.98,
    //     }),
    //     Animated.timing(xValue, {
    //       toValue: 0,
    //       duration: 100,
    //       useNativeDriver: false,
    //       easing: Easing.ease,
    //       delay: (60000 / tempo - 100) * 0.98 * 0.98,
    //     }),
    //   ])
    // ).start();
    //  Animated.timing(xValue, {
    //    toValue:  ? 23 : 0,
    //    duration: 100,
    //    useNativeDriver: false,
    //  }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.bpmIndicator}>
        <View
          style={[
            styles.bpmIndicatorPoint,
            { backgroundColor: theme.colors?.primary, left: isLeft ? 0 : 23 },
          ]}
        />
      </View>
      {/* {isMetronomeOn && (
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
      )} */}

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
