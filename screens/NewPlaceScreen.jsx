import React from "react";
import { View, Text } from "react-native";

const NewPlaceScreen = () => {
  return (
    <View>
      <Text>New Place Screen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Place"
};

export default NewPlaceScreen;
