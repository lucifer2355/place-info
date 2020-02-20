import React from "react";
import { View, Text, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const PlacesListScreen = () => {
  return (
    <View>
      <Text>Places List Screen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Add'
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default PlacesListScreen;
