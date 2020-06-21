import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
