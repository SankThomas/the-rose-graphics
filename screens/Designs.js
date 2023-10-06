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

const designs = [
  {
    image:
      "https://res.cloudinary.com/dbwj8dzpm/image/upload/v1696528734/cld-sample-5.jpg",
    title: "Brochures",
    desc: "Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.",
  },
  {
    image:
      "https://res.cloudinary.com/dbwj8dzpm/image/upload/v1696528734/cld-sample-4.jpg",
    title: "Book Covers",
    desc: "Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.",
  },
  {
    image:
      "https://res.cloudinary.com/dbwj8dzpm/image/upload/v1696528733/cld-sample-3.jpg",
    title: "Logo Design",
    desc: "Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.",
  },
];

export default function Designs({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageContainer}>
          <Text style={globals.heading}>All Designs</Text>

          <View style={[globals.topMargin, styles.cards]}>
            {designs.map((design, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => navigation.navigate("Design", design)}
              >
                <ImageBackground
                  source={{
                    uri: design.image,
                  }}
                  resizeMode="cover"
                  borderRadius={16}
                  style={styles.image}
                >
                  <Text style={styles.overlayText}>{design.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
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
    fontFamily: "grotesk",
  },
});
