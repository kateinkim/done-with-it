import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import OfflineNotice from "./components/OfflineNotice";
import AuthNavigator from "./navigation/AuthNavigator";
import AuthContext from "./auth/context";
import authStorage from "./auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
