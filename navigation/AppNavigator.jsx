import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListEditingScreen from "../screens/ListEditingScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={ListEditingScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
