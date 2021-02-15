import React, { useLayoutEffect, useState, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import StoreFetchingSongListContainer from '../domain/song/StoreFetchingSongListContainer';
import { StackNavigationProp } from '@react-navigation/stack';
import { SongsStackParamList } from '../navigation/SongsStack';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import {
  BORDER_RADIUS,
  BOTTOM_SHEET_HEADER_HEIGHT,
  BOTTOM_SHEET_LIST_ITEM_HEIGHT,
  PADDING,
} from '../config/themes';
// import BottomSheet from 'reanimated-bottom-sheet';
// import BottomSheetBehavior from 'reanimated-bottom-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ListItem } from 'react-native-elements';

interface SongsScreenProps {
  navigation: StackNavigationProp<SongsStackParamList, 'Songs'>;
}

const SongsScreen: React.FC<SongsScreenProps> = ({ navigation }) => {
  const theme = useTheme();
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

  const handleAddSongItemClick = () => {
    navigation.navigate('SearchSong');

    bottomSheetRef.current?.close();
  };

  return (
    <>
      <StoreFetchingSongListContainer />

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
        <ListItem onPress={handleAddSongItemClick}>
          <Icon name='add' size={25} color='black' />
          <ListItem.Content>
            <ListItem.Title>Neuen Song erstellen</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </RBSheet>
    </>
  );
};

export default withBottomRoundedCorners(withBackground(SongsScreen));
