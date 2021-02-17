import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useLayoutEffect, useRef } from 'react';
import { Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSelector } from 'react-redux';
import { ReduxState } from '../config/store';
import {
  BORDER_RADIUS,
  BOTTOM_SHEET_HEADER_HEIGHT,
  BOTTOM_SHEET_LIST_ITEM_HEIGHT,
  PADDING,
} from '../config/themes';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import PlaylistSongListContainer from '../domain/song/PlaylistSongListContainer';
import { PlaylistStackParamList } from '../navigation/PlaylistStack';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

interface PlaylistSongsScreenProps {
  route: RouteProp<PlaylistStackParamList, 'PlaylistSongs'>;
}

const PlaylistSongsScreen: React.FC<PlaylistSongsScreenProps> = ({ route }) => {
  const theme = useTheme();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'PlaylistSongs'
  > = useNavigation();

  const bottomSheetRef = useRef<RBSheet>(null);

  const state = useSelector((state: ReduxState) => state.playlist);
  const playlist = state.playlists.find(
    (value) => value.playlistId === route.params.playlistId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: playlist?.name,
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

  const handleAddSong = () => {
    bottomSheetRef.current?.close();

    navigation.navigate('AddSongToPlaylist');
  };

  return (
    <>
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
        <ListItem onPress={handleAddSong}>
          <Icon name='add' size={25} color='black' />
          <ListItem.Content>
            <ListItem.Title>Song hinzufügen</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </RBSheet>

      <PlaylistSongListContainer playlistId={route.params.playlistId} />
    </>
  );
};

export default withBottomRoundedCorners(withBackground(PlaylistSongsScreen));
