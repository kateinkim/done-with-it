import React from "react";
import { StyleSheet } from "react-native";

import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="title"
        subTitle="subTitle"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
