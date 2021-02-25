import React, { RefObject } from "react";
import { FullTheme, ListItem } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  BORDER_RADIUS,
  BOTTOM_SHEET_HEADER_HEIGHT,
  BOTTOM_SHEET_LIST_ITEM_HEIGHT,
  PADDING,
} from "../../config/themes";
import PlaylistContainer from "./PlaylistContainer";
import PlaylistEntity from "./PlaylistModel";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import NetworkIndicator from "../common/NetworkIndicator";
import { NetInfoState } from "@react-native-community/netinfo";

interface PlaylistWithBottomSheetProps {
  theme: Partial<FullTheme>;
  playlist: PlaylistEntity;
  isFirstItem: boolean;
  isLastItem: boolean;
  handleChevronPress: () => void;
  bottomSheetRef: RefObject<RBSheet>;
  handleBottomSheetEdit: () => void;
  handleBottomSheetDelete: () => void;
  handlePlaylistPress: () => void;
  netInfo: NetInfoState;
}

const PlaylistWithBottomSheet: React.FC<PlaylistWithBottomSheetProps> = ({
  theme,
  playlist,
  isFirstItem,
  isLastItem,
  handleChevronPress,
  bottomSheetRef,
  handleBottomSheetEdit,
  handleBottomSheetDelete,
  handlePlaylistPress,
  netInfo,
}) => {
  return (
    <>
      <PlaylistContainer
        playlist={playlist}
        isFirstItem={isFirstItem}
        isLastItem={isLastItem}
        handleChevronPress={handleChevronPress}
        handlePlaylistPress={handlePlaylistPress}
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
          <Icon name="edit" size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Bearbeiten</ListItem.Title>
          </ListItem.Content>

          <NetworkIndicator />
        </ListItem>

        <ListItem
          onPress={handleBottomSheetDelete}
          disabled={!netInfo.isInternetReachable}
        >
          <Icon name="delete" size={25} color={theme.colors?.black} />
          <ListItem.Content>
            <ListItem.Title>Löschen</ListItem.Title>
          </ListItem.Content>

          <NetworkIndicator />
        </ListItem>
      </RBSheet>
    </>
  );
};

export default PlaylistWithBottomSheet;
