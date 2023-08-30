import { StyleSheet } from "react-native";

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topMargin: {
    marginTop: 32,
  },
  bottomMargin: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 32,
    fontFamily: "catamaranbold",
    color: "#020D4D",
  },
  text: {
    color: "#020d4d99",
    lineHeight: 28,
  },
  buttonContainer: {},
  button: {
    backgroundColor: "#020D4D",
    color: "#ffffff",
    fontFamily: "catamaranbold",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
  },
  profileImage: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 100,
    marginRight: 16,
  },
});
