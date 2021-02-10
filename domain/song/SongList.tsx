import React, { RefObject } from 'react';
import SongContainer from './SongContainer';
import SongEntity from './SongEntity';
import LoadingAndErrors from '../common/LoadingAndErrors';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import PaddingView from '../common/PaddingView';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BORDER_RADIUS } from '../../config/themes';
import { ListItem } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';

interface SongListProps {
  songs: SongEntity[];
  loading: boolean;
  errors: string[];
  bottomSheetRef: RefObject<RBSheet>;
  openBottomSheet: (song: SongEntity) => void;
}

const SongList: React.FC<SongListProps> = ({
  songs,
  loading,
  errors,
  bottomSheetRef,
  openBottomSheet,
}) => {
  const renderItem = (item: ListRenderItemInfo<SongEntity>) => {
    return (
      <SongContainer
        song={item.item}
        isFirstItem={item.index === 0}
        isLastItem={item.index === songs.length - 1}
        openBottomSheet={() => openBottomSheet(item.item)}
      />
    );
  };

  return (
    <>
      <LoadingAndErrors loading={loading} errors={errors}>
        <FlatList
          keyExtractor={(item) => item.songId}
          data={songs}
          renderItem={renderItem}
          ListFooterComponent={<PaddingView />}
          ListHeaderComponent={<PaddingView />}
          initialNumToRender={10}
        />
      </LoadingAndErrors>

      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: BORDER_RADIUS,
            borderTopLeftRadius: BORDER_RADIUS,
          },
        }}
        //height={LIST_ITEM_HEIGHT + BOTTOM_SHEET_HEADER_HEIGHT + PADDING}
      >
        <ListItem>
          <Icon name='add' size={25} color='black' />
          <ListItem.Content>
            <ListItem.Title>Neuen Song erstellen</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </RBSheet>
    </>
  );
};

export default SongList;
