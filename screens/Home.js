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
import Services from "../components/Services";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageContainer}>
          <Text style={globals.heading}>The Rose Graphics</Text>

          <View>
            <Text style={[globals.text, styles.text]}>
              We deal in design and wireframing of company brochures, logos,
              flyers, business cards, advertisements and more. Anything you need
              designed, we do it!
            </Text>

            <TouchableOpacity style={globals.buttonContainer}>
              <Text
                style={globals.button}
                onPress={() => navigation.navigate("Designs")}
              >
                All Designs
              </Text>
            </TouchableOpacity>
          </View>

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
  text: {
    marginTop: 10,
    marginBottom: 20,
  },
});
