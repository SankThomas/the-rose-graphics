import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { globals } from "../styles/globals";

const services = [
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

export default function Services({ navigation }) {
  return (
    <View>
      <Text style={globals.heading}>What service are you looking for?</Text>
      <View style={styles.cards}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Service", service)}
          >
            <Image source={{ uri: service.image }} style={styles.image} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={styles.heading}>{service.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    gap: 32,
    marginTop: 32,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 16,
  },
  heading: {
    fontSize: 24,
    fontFamily: "grotesk",
    color: "#020D4D",
  },
});
