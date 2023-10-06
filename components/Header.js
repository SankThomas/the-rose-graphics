import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import HeaderIcon from "./HeaderIcon";
import { globals } from "../styles/globals";

export default function Header({ navigation, route }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#020D4D" />
      </TouchableOpacity>
      <Text style={globals.pageHeading}>{route.params.title}</Text>

      <HeaderIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingTop: 46,
  },
});
