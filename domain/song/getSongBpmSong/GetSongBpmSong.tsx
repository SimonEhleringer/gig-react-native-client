import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BORDER_RADIUS } from '../../../config/themes';
import GetSongBpmSongModel from './GetSongBpmSongModel';
import { useTheme } from '../../../hooks/useTheme';

interface GetSongBpmSongProps {
  getSongBpmSong: GetSongBpmSongModel;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleSongPress: () => void;
}

const GetSongBpmSong: React.FC<GetSongBpmSongProps> = ({
  getSongBpmSong,
  isFirstItem,
  isLastItem,
  handleSongPress,
}) => {
  const theme = useTheme();
  const { title, interpreter } = getSongBpmSong;

  return (
    <ListItem
      bottomDivider={!isLastItem}
      containerStyle={[
        { backgroundColor: theme.colors?.paperBackgroundColor },
        isFirstItem ? styles.borderTopRadius : {},
        isLastItem ? styles.borderBottomRadius : {},
      ]}
      onPress={handleSongPress}
      Component={TouchableWithoutFeedback}
    >
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle>{interpreter}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  borderTopRadius: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  borderBottomRadius: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

export default GetSongBpmSong;
