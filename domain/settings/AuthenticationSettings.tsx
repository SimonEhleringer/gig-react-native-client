import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Button,
  Divider,
  FullTheme,
  Text,
} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Stat from "./Stat";

interface AuthenticationSettingsProps {
  theme: Partial<FullTheme>;
  username: string;
  handleLogout: () => void;
}

const AuthenticationSettings: React.FC<AuthenticationSettingsProps> = ({
  theme,
  username,
  handleLogout,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.avatarAndStatsContainer}>
        <Avatar
          containerStyle={styles.avatarContainer}
          size="large"
          rounded
          title={username.charAt(0)}
          activeOpacity={1}
          overlayContainerStyle={{
            backgroundColor: theme.colors?.secondary,
          }}
        />
        <View style={styles.statsContainer}>
          <Stat stat="0" statName="Songs" />
          <Stat stat="43" statName="Playlists" />
        </View>
      </View>

      <Text style={styles.username}>{username}</Text>

      <Button
        TouchableComponent={TouchableOpacity}
        type="outline"
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.buttonStyle}
        title={"Abmelden"}
        onPress={handleLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  avatarAndStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  avatarContainer: {
    marginBottom: 5,
    backgroundColor: "transparent",
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  username: {
    marginVertical: 5,
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainerStyle: {
    marginVertical: 5,
  },
  buttonStyle: {
    borderWidth: 2,
  },
});

export default AuthenticationSettings;
