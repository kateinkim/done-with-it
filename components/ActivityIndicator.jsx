import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#fff",
    opacity: 0.8,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
