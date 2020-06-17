import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import AppButton from "./components/AppButton";
import ListDetailsScreen from "./screens/ListDetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
