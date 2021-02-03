import React, { useLayoutEffect, useState, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import withBackground from '../domain/common/withBackground';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import SongListContainer from '../domain/song/SongListContainer';
import { StackNavigationProp } from '@react-navigation/stack';
import { SongsStackParamList } from '../navigation/SongsStack';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { BORDER_RADIUS, PADDING } from '../config/themes';
// import BottomSheet from 'reanimated-bottom-sheet';
// import BottomSheetBehavior from 'reanimated-bottom-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ListItem } from 'react-native-elements';

const BOTTOM_SHEET_HEADER_HEIGHT = 25;
const LIST_ITEM_HEIGHT = 57.42856979370117;

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
    navigation.navigate('AddSong');

    bottomSheetRef.current?.close();
  };

  return (
    <>
      <SongListContainer />

      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: BORDER_RADIUS,
            borderTopLeftRadius: BORDER_RADIUS,
          },
        }}
        height={LIST_ITEM_HEIGHT + BOTTOM_SHEET_HEADER_HEIGHT + PADDING}
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
