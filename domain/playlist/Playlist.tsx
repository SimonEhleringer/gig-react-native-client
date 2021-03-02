import React from 'react';
import PlaylistEntity from './PlaylistModel';
import { StyleSheet, TouchableHighlightBase } from 'react-native';
import { FullTheme, ListItem } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native';
import { BORDER_RADIUS } from '../../config/themes';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

interface PlaylistProps {
  theme: Partial<FullTheme>;
  playlist: PlaylistEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
  handlePlaylistPress: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  theme,
  playlist,
  isFirstItem,
  isLastItem,
  handleChevronPress,
  handlePlaylistPress,
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
      onPress={handlePlaylistPress}
    >
      <ListItem.Content>
        <ListItem.Title>{playlist.name}</ListItem.Title>
        <ListItem.Subtitle>{playlist.songs.length} Songs</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron
        Component={TouchableWithoutFeedback}
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
