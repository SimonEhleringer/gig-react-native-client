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

interface SongWithBottomSheetProps {
  theme: Partial<FullTheme>;
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  bottomSheetRef: RefObject<RBSheet>;
  handleBottomSheetEdit: () => void;
  handleBottomSheetDelete: () => void;
  handleChevronPress: () => void;
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
        <ListItem onPress={handleBottomSheetEdit}>
          <Icon name='edit' size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Bearbeiten</ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem onPress={handleBottomSheetDelete}>
          <Icon name='delete' size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Löschen</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </RBSheet>
    </>
  );
};

export default SongWithBottomSheet;
