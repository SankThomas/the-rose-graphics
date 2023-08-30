import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globals } from "../styles/globals";

export default function Designs() {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageContainer}>
          <Text style={globals.heading}>All Designs</Text>

          <View style={[globals.topMargin, styles.cards]}>
            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={{
                  uri: "https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                resizeMode="cover"
                borderRadius={16}
                style={styles.image}
              >
                <Text style={styles.overlayText}>Large text</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={{
                  uri: "https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                resizeMode="cover"
                borderRadius={16}
                style={styles.image}
              >
                <Text style={styles.overlayText}>Large text</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={{
                  uri: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                resizeMode="cover"
                borderRadius={16}
                style={styles.image}
              >
                <Text style={styles.overlayText}>Large text</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={{
                  uri: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                resizeMode="cover"
                borderRadius={16}
                style={styles.image}
              >
                <Text style={styles.overlayText}>Large text</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={{
                  uri: "https://images.pexels.com/photos/1888883/pexels-photo-1888883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                resizeMode="cover"
                borderRadius={16}
                style={styles.image}
              >
                <Text style={styles.overlayText}>Large text</Text>
              </ImageBackground>
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
  cards: {
    gap: 32,
  },
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  overlayText: {
    color: "#ffffff",
    fontSize: 42,
    fontFamily: "catamaranbold",
  },
});
