import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem, Text, ThemeContext } from "react-native-elements";
import Tempo from "./components/Tempo";
import SongEntity from "./SongEntity";
import MaskedView from "@react-native-community/masked-view";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../hooks/useTheme";
import Collapsible from "react-native-collapsible";

interface SongProps {
  song: SongEntity;
  hasBottomDivider: boolean;
}

const Song: React.FC<SongProps> = ({ song, hasBottomDivider }) => {
  const theme = useTheme();
  const [areNotesCollapsed, setAreNotesCollapsed] = useState(false);

  // primary: '#79C3EB',
  // secondary: '#858CEB',

  return (
    <ListItem
      style={{ backgroundColor: "transparent" }}
      containerStyle={{ backgroundColor: "transparent" }}
      bottomDivider={hasBottomDivider}
      onPress={() => alert("test")}
    >
      <MaskedView
        style={{ marginHorizontal: -10, height: 30, width: 30 }}
        maskElement={
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="chevron-right"
              size={30}
              color="white"
              onPress={() => setAreNotesCollapsed(!areNotesCollapsed)}
            />
          </View>
        }
      >
        <LinearGradient style={{ flex: 1 }} colors={["#858CEB", "#79C3EB"]} />
      </MaskedView>
      <ListItem.Content>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <ListItem.Content style={styles.leftListItemContent}>
            <ListItem.Title>{song.title}</ListItem.Title>
            <ListItem.Subtitle>{song.interpreter}</ListItem.Subtitle>
          </ListItem.Content>

          <ListItem.Content style={styles.rightListItemContent}>
            <Tempo tempo={song.tempo} />
          </ListItem.Content>

          <ListItem.Chevron
            name="more-vert"
            type="material"
            size={25}
            onPress={() => alert("Test2")}
          />
        </View>

        <Collapsible collapsed={areNotesCollapsed}>
          <Text>test</Text>
        </Collapsible>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  leftListItemContent: {
    flex: 2,
  },
  rightListItemContent: {
    alignItems: "center",
  },
});

export default Song;
