import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { globals } from "../styles/globals";

const services = [
  {
    title: "Book Covers",
  },
  {
    title: "Brochures",
  },
];

export default function Services({ navigation }) {
  return (
    <View style={{ marginTop: 64 }}>
      <Text style={globals.heading}>How can we serve you?</Text>
      <View style={styles.cards}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Service", service)}
          >
            {/* <Image source={} style={styles.image} /> */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={styles.heading}>{service.title}</Text>
              <Text
                style={globals.text}
                onPress={() => navigation.navigate("Service", service)}
              >
                View More
              </Text>
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
    fontFamily: "catamaranbold",
    color: "#020D4D",
  },
});
