import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useLayoutEffect, useRef } from 'react';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import StoreFetchingPlaylistListContainer from '../domain/playlist/StoreFetchingPlaylistListContainer';
import { PlaylistStackParamList } from '../navigation/PlaylistStack';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import {
  BORDER_RADIUS,
  BOTTOM_SHEET_LIST_ITEM_HEIGHT,
  BOTTOM_SHEET_HEADER_HEIGHT,
  PADDING,
} from '../config/themes';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ListItem } from 'react-native-elements';

interface PlaylistsScreenProps {}

const PlaylistsScreen: React.FC<PlaylistsScreenProps> = ({}) => {
  const theme = useTheme();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'Playlists'
  > = useNavigation();

  const bottomSheetRef = useRef<RBSheet>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name='more-vert'
          size={25}
          color={theme.colors?.black}
          style={{ paddingRight: PADDING }}
          onPress={() => bottomSheetRef.current?.open()}
        />
      ),
    });
  });

  const handleAddPlaylistItemClick = () => {
    navigation.navigate('CreatePlaylist');

    bottomSheetRef.current?.close();
  };

  return (
    <>
      <StoreFetchingPlaylistListContainer />
      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: BORDER_RADIUS,
            borderTopLeftRadius: BORDER_RADIUS,
          },
        }}
        height={
          BOTTOM_SHEET_LIST_ITEM_HEIGHT + BOTTOM_SHEET_HEADER_HEIGHT + PADDING
        }
      >
        <ListItem onPress={handleAddPlaylistItemClick}>
          <Icon name='add' size={25} color='black' />
          <ListItem.Content>
            <ListItem.Title>Neue Playlist erstellen</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </RBSheet>
    </>
  );
};

export default withBottomRoundedCorners(withBackground(PlaylistsScreen));
