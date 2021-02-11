import React, { RefObject } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Divider, FullTheme, ListItem, Text } from 'react-native-elements';
import Tempo from './components/Tempo';
import SongEntity from './SongEntity';
import MaskedView from '@react-native-community/masked-view';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Collapsible from 'react-native-collapsible';
import { TouchableWithoutFeedback } from 'react-native';
import {
  BORDER_RADIUS,
  MARGIN,
  PADDING,
  PADDING_DOUBLE,
} from '../../config/themes';
import RBSheet from 'react-native-raw-bottom-sheet';

interface SongProps {
  theme: Partial<FullTheme>;
  song: SongEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  areNotesCollapsed: boolean;
  rotation: Animated.AnimatedInterpolation;
  bottomSheetRef: RefObject<RBSheet>;
  handleListItemPress: () => void;
  handleChevronPress: () => void;
}

const Song: React.FC<SongProps> = ({
  theme,
  song,
  isFirstItem,
  isLastItem,
  areNotesCollapsed,
  rotation,
  bottomSheetRef,
  handleListItemPress,
  handleChevronPress,
}) => {
  return (
    <>
      <ListItem
        Component={TouchableWithoutFeedback}
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
            <Animated.View
              style={[
                styles.turnIconWrapper,
                {
                  transform: [{ rotate: rotation }],
                },
              ]}
            >
              <MaskedView
                style={styles.turnIconMaskedView}
                maskElement={
                  <Icon name='chevron-right' size={30} color='white' />
                }
              >
                <LinearGradient
                  style={styles.turnIconLinearGradient}
                  colors={[
                    theme.colors && theme.colors.secondary
                      ? theme.colors.secondary
                      : 'transparent',
                    theme.colors && theme.colors.primary
                      ? theme.colors.primary
                      : 'transparent',
                  ]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                />
              </MaskedView>
            </Animated.View>

            <ListItem.Content style={styles.listItemContent}>
              <ListItem.Content style={styles.leftListItemContent}>
                <ListItem.Title>{song.title}</ListItem.Title>
                <ListItem.Subtitle>{song.interpreter}</ListItem.Subtitle>
              </ListItem.Content>

              <ListItem.Content style={styles.rightListItemContent}>
                <Tempo tempo={song.tempo} isMetronomeOn />
              </ListItem.Content>

              <ListItem.Chevron
                name='more-vert'
                type='material'
                size={25}
                onPress={handleChevronPress}
              />
            </ListItem.Content>
          </View>

          <View style={styles.notesWrapper}>
            <Collapsible
              duration={200}
              collapsed={areNotesCollapsed}
              style={styles.notesCollapsible}
            >
              <Divider />
              <View style={styles.notesTextWrapper}>
                <Text>{song.notes}</Text>
              </View>
            </Collapsible>
          </View>
        </ListItem.Content>
      </ListItem>

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

const styles = StyleSheet.create({
  listItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  turnIconWrapper: {
    marginLeft: -MARGIN,
  },
  turnIconMaskedView: {
    height: 30,
    width: 30,
  },
  turnIconLinearGradient: {
    flex: 1,
  },
  listItemContent: {
    flexDirection: 'row',
  },
  leftListItemContent: {
    flex: 2,
  },
  rightListItemContent: {
    alignItems: 'center',
  },
  notesWrapper: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingRight: PADDING_DOUBLE,
    paddingLeft: PADDING_DOUBLE,
  },
  notesCollapsible: {
    paddingTop: PADDING,
  },
  notesTextWrapper: {
    paddingTop: PADDING,
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

export default Song;
