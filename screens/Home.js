import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { globals } from "../styles/globals";
import Services from "../components/Services";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageContainer}>
          <Services navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
});
