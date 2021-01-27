import React from 'react';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { Button, Text } from 'react-native-elements';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../../hooks/useTheme';

interface BottomSectionProps {
  text: string;
  buttonTitle: string;
  buttonPress: (event: GestureResponderEvent) => void;
}

const BottomSection: React.FC<BottomSectionProps> = ({
  text,
  buttonTitle,
  buttonPress,
}) => {
  const theme = useTheme();

  return (
    <HideWithKeyboard>
      <Text style={[styles.text, { color: theme.colors?.text }]}>{text}</Text>
      <Button
        TouchableComponent={TouchableOpacity}
        type='outline'
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.buttonStyle}
        title={buttonTitle}
        onPress={buttonPress}
      />
    </HideWithKeyboard>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buttonContainerStyle: {
    marginVertical: 5,
  },
  buttonStyle: {
    borderWidth: 2,
  },
});

export default BottomSection;
