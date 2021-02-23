import React, { RefObject } from 'react';
import { FullTheme, ListItem } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  BORDER_RADIUS,
  BOTTOM_SHEET_HEADER_HEIGHT,
  BOTTOM_SHEET_LIST_ITEM_HEIGHT,
  PADDING,
} from '../../config/themes';
import SongContainer from './SongContainer';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import SongEntity from './SongEntity';
import { NetInfoState } from '@react-native-community/netinfo';
import NetworkIndicator from '../common/NetworkIndicator';

interface SongWithBottomSheetProps {
  theme: Partial<FullTheme>;
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  bottomSheetRef: RefObject<RBSheet>;
  handleBottomSheetEdit: () => void;
  handleBottomSheetDelete: () => void;
  handleChevronPress: () => void;
  netInfo: NetInfoState;
}

const SongWithBottomSheet: React.FC<SongWithBottomSheetProps> = ({
  theme,
  song,
  isFirstItem,
  isLastItem,
  bottomSheetRef,
  handleBottomSheetEdit,
  handleBottomSheetDelete,
  handleChevronPress,
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
          BOTTOM_SHEET_LIST_ITEM_HEIGHT * 2 +
          BOTTOM_SHEET_HEADER_HEIGHT +
          PADDING
        }
      >
        <ListItem
          onPress={handleBottomSheetEdit}
          disabled={!netInfo.isInternetReachable}
        >
          <Icon name='edit' size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Bearbeiten</ListItem.Title>
          </ListItem.Content>

          <NetworkIndicator />
        </ListItem>

        <ListItem
          onPress={handleBottomSheetDelete}
          disabled={!netInfo.isInternetReachable}
        >
          <Icon name='delete' size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Löschen</ListItem.Title>
          </ListItem.Content>

          <NetworkIndicator />
        </ListItem>
      </RBSheet>
    </>
  );
};

export default SongWithBottomSheet;
