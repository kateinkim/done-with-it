import React from "react";
import { StyleSheet } from "react-native";

import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
