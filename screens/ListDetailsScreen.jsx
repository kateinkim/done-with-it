import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/rsz_inyeong.jpg")}
            title="Kate Kim"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
