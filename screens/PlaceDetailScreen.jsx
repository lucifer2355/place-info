import React from "react";
import { View, Text } from "react-native";

const PlaceDetailScreen = () => {
  return (
    <View>
      <Text>Place Detail Screen</Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = navData => {
  const placeTitle = navData.navigation.getParam("placeTitle");
  return {
    headerTitle: placeTitle
  };
};

export default PlaceDetailScreen;
