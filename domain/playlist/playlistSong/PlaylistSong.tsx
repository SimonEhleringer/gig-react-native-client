import React, { RefObject } from 'react';
import { FullTheme, ListItem } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  BORDER_RADIUS,
  BOTTOM_SHEET_HEADER_HEIGHT,
  BOTTOM_SHEET_LIST_ITEM_HEIGHT,
  PADDING,
} from '../../../config/themes';
import SongContainer from '../../song/SongContainer';
import SongEntity from '../../song/SongEntity';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import NetworkIndicator from '../../common/NetworkIndicator';
import { NetInfoState } from '@react-native-community/netinfo';

interface PlaylistSongProps {
  theme: Partial<FullTheme>;
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
  bottomSheetRef: RefObject<RBSheet>;
  handleBottomSheetRemoveFromPlaylist: () => void;
  handleBottomSheetMoveUp: () => void;
  handleBottomSheetMoveDown: () => void;
  netInfo: NetInfoState;
}

const PlaylistSong: React.FC<PlaylistSongProps> = ({
  theme,
  song,
  isFirstItem,
  isLastItem,
  handleChevronPress,
  bottomSheetRef,
  handleBottomSheetRemoveFromPlaylist,
  handleBottomSheetMoveUp,
  handleBottomSheetMoveDown,
  netInfo,
}) => {
  return (
    <>
      <SongContainer
        song={song}
        isFirstItem={isFirstItem}
        isLastItem={isLastItem}
        handleChevronPress={handleChevronPress}
      />
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
          BOTTOM_SHEET_LIST_ITEM_HEIGHT * (isFirstItem || isLastItem ? 2 : 3) +
          BOTTOM_SHEET_HEADER_HEIGHT +
          PADDING
        }
      >
        {!isFirstItem && (
          <ListItem
            onPress={handleBottomSheetMoveUp}
            disabled={!netInfo.isInternetReachable}
          >
            <Icon
              name='keyboard-arrow-up'
              size={25}
              color={theme.colors?.black}
            />
            <ListItem.Content>
              <ListItem.Title>Nach oben verschieben</ListItem.Title>
            </ListItem.Content>

            <NetworkIndicator />
          </ListItem>
        )}

        {!isLastItem && (
          <ListItem
            onPress={handleBottomSheetMoveDown}
            disabled={!netInfo.isInternetReachable}
          >
            <Icon
              name='keyboard-arrow-down'
              size={25}
              color={theme.colors?.black}
            />
            <ListItem.Content>
              <ListItem.Title>Nach unten verschieben</ListItem.Title>
            </ListItem.Content>

            <NetworkIndicator />
          </ListItem>
        )}

        <ListItem
          onPress={handleBottomSheetRemoveFromPlaylist}
          disabled={!netInfo.isInternetReachable}
        >
          <Icon name='remove' size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Aus Playlist entfernen</ListItem.Title>
          </ListItem.Content>

          <NetworkIndicator />
        </ListItem>

        {/* <ListItem onPress={handleBottomSheetDelete}>
          <Icon name='delete' size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Löschen</ListItem.Title>
          </ListItem.Content>
        </ListItem> */}
      </RBSheet>
    </>
  );
};

export default PlaylistSong;
