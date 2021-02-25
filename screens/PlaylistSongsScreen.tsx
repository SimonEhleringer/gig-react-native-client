import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Switch, Text, View, TouchableWithoutFeedback } from 'react-native';
import { ListItem } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../config/store';
import {
  BORDER_RADIUS,
  BOTTOM_SHEET_HEADER_HEIGHT,
  BOTTOM_SHEET_LIST_ITEM_HEIGHT,
  PADDING,
} from '../config/themes';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import PlaylistSongListContainer from '../domain/playlist/playlistSong/PlaylistSongListContainer';
import {
  AddSongToPlaylistParams,
  PlaylistStackParamList,
} from '../navigation/PlaylistStack';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { setIsGigModeActive } from '../domain/playlist/slice';

interface PlaylistSongsScreenProps {
  route: RouteProp<PlaylistStackParamList, 'PlaylistSongs'>;
}

const PlaylistSongsScreen: React.FC<PlaylistSongsScreenProps> = ({ route }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    PlaylistStackParamList,
    'PlaylistSongs'
  > = useNavigation();

  const bottomSheetRef = useRef<RBSheet>(null);

  const state = useSelector((state: ReduxState) => state.playlist);
  const playlist = state.playlists.find(
    (value) => value.playlistId === route.params.playlistId
  );
  const isGigModeActive = state.isGigModeActive;

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

    const params: AddSongToPlaylistParams = {
      playlistId: route.params.playlistId,
    };

    navigation.navigate('AddSongToPlaylist', params);
  };

  const handleSetIsGigModeActive = (val: boolean) => {
    dispatch(setIsGigModeActive(val));
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
          BOTTOM_SHEET_LIST_ITEM_HEIGHT * 2 +
          BOTTOM_SHEET_HEADER_HEIGHT +
          PADDING
        }
      >
        <ListItem onPress={handleAddSong}>
          <Icon name='add' size={25} color='black' />
          <ListItem.Content>
            <ListItem.Title>Song hinzufügen</ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem>
          <Icon
            name={isGigModeActive ? 'music-note' : 'music-off'}
            size={25}
            color='black'
          />
          <ListItem.Content>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <ListItem.Title>Auftritts-Modus</ListItem.Title>
              <Switch
                value={isGigModeActive}
                onValueChange={handleSetIsGigModeActive}
              />
            </View>
          </ListItem.Content>
        </ListItem>
      </RBSheet>

      <PlaylistSongListContainer playlistId={route.params.playlistId} />
    </>
  );
};

export default withBottomRoundedCorners(withBackground(PlaylistSongsScreen));
