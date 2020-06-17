import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import AppButton from "./components/AppButton";
import ListDetailsScreen from "./screens/ListDetailsScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
