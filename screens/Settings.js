import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globals } from "../styles/globals";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageContainer}>
          <Text style={globals.heading}>Settings</Text>

          <View>
            <Text style={globals.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              iste, quibusdam ullam autem explicabo ab dolore soluta assumenda
              deleniti. Sunt!
            </Text>

            <TouchableOpacity style={globals.buttonContainer}>
              <Text style={globals.button} onPress={() => navigation.goBack()}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
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
