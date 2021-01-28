import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { useTheme } from "../hooks/useTheme";
import { useSelector } from "react-redux";
import { ReduxState } from "../config/store";

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({}) => {
  const theme = useTheme();

  const state = useSelector((state: ReduxState) => state.authentication);
  const username = state.username;

  return (
    <View style={{ backgroundColor: theme.colors?.white, flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Avatar
          containerStyle={{ margin: 10 }}
          size="large"
          rounded
          title={username.charAt(0)}
          activeOpacity={1}
          overlayContainerStyle={{ backgroundColor: theme.colors?.primary }}
        />

        <Text h3>{username}</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
