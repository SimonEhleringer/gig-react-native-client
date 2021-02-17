import React from 'react';
import PlaylistEntity from './PlaylistModel';
import { StyleSheet } from 'react-native';
import { FullTheme, ListItem } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BORDER_RADIUS } from '../../config/themes';

interface PlaylistProps {
  theme: Partial<FullTheme>;
  playlist: PlaylistEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  theme,
  playlist,
  isFirstItem,
  isLastItem,
  handleChevronPress,
}) => {
  return (
    <ListItem
      Component={TouchableWithoutFeedback}
      containerStyle={[
        { backgroundColor: theme.colors?.paperBackgroundColor },
        isFirstItem ? styles.borderTopRadius : {},
        isLastItem ? styles.borderBottomRadius : {},
      ]}
      bottomDivider={!isLastItem}
    >
      <ListItem.Content>
        <ListItem.Title>{playlist.name}</ListItem.Title>
        <ListItem.Subtitle>{playlist.songs.length} Songs</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron
        name='more-vert'
        type='material'
        size={25}
        onPress={handleChevronPress}
      />
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

export default Playlist;
