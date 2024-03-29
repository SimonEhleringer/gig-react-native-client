import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { FullTheme, ListItem } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BORDER_RADIUS } from '../../../../config/themes';
import Tempo from '../../../song/Tempo';
import SongEntity from '../../../song/SongEntity';

interface AddPlaylistSongProps {
  theme: Partial<FullTheme>;
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleListItemPress: () => void;
}

const AddPlaylistSong: React.FC<AddPlaylistSongProps> = ({
  theme,
  song,
  isFirstItem,
  isLastItem,
  handleListItemPress,
}) => {
  return (
    <ListItem
      style={[
        isFirstItem ? styles.borderTopRadius : {},
        isLastItem ? styles.borderBottomRadius : {},
      ]}
      Component={TouchableHighlight}
      containerStyle={[
        { backgroundColor: theme.colors?.paperBackgroundColor },
        isFirstItem ? styles.borderTopRadius : {},
        isLastItem ? styles.borderBottomRadius : {},
      ]}
      bottomDivider={!isLastItem}
      onPress={handleListItemPress}
    >
      <ListItem.Content>
        <View style={styles.listItemTop}>
          <ListItem.Content style={styles.listItemContent}>
            <ListItem.Content style={styles.leftListItemContent}>
              <ListItem.Title>{song.title}</ListItem.Title>
              <ListItem.Subtitle>{song.interpreter}</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Content style={styles.rightListItemContent}>
              <Tempo tempo={song.tempo} isMetronomeOn={false} />
            </ListItem.Content>
          </ListItem.Content>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemContent: {
    flexDirection: 'row',
  },
  leftListItemContent: {
    flex: 2,
  },
  rightListItemContent: {
    // alignItems: 'center',
    flex: 0,
  },
  borderTopRadius: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  borderBottomRadius: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

export default AddPlaylistSong;
