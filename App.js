import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./screens/LoginScreen";
import ListEditingScreen from "./screens/ListEditingScreen";
import MessagesScreen from "./screens/MessagesScreen.jsx";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";

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
