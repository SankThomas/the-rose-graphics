import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globals } from "../styles/globals";
import Header from "../components/Header";

export default function Design({ navigation, route }) {
  return (
    <>
      <SafeAreaView style={globals.container}>
        <Header navigation={navigation} route={route} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={globals.pageContainer}>
            <Text style={globals.heading}>{route.params.title}</Text>

            <Image style={styles.image} source={{ uri: route.params.image }} />

            <Text style={[globals.text, styles.text]}>{route.params.desc}</Text>

            <TouchableOpacity style={globals.buttonContainer}>
              <Text style={globals.button}>
                Contact Me For {route.params.title} Service
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 16,
    marginTop: 32,
  },
  text: {
    marginVertical: 32,
  },
});
