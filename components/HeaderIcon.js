import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { globals } from "../styles/globals";

export default function HeaderIcon({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
      <Image
        source={require("../assets/icon.png")}
        style={globals.profileImage}
      />
    </TouchableOpacity>
  );
}
