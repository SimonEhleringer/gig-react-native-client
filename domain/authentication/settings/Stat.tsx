import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

interface StatProps {
  stat: string;
  statName: string;
}

const Stat: React.FC<StatProps> = ({ stat, statName }) => {
  return (
    <View>
      <Text style={styles.stat}>{stat}</Text>
      <Text style={styles.statName}>{statName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stat: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statName: {
    textAlign: 'center',
  },
});

export default Stat;
