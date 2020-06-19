import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./screens/LoginScreen";
import { ListEditingScreen } from "./screens/ListEditingScreen";
import MessagesScreen from "./screens/MessagesScreen.jsx";

export default function App() {
  return <ListEditingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
