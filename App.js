import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlacesNavigator from "./navigation/PlacesNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import places from "./store/reducers/places";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch(err => {
    console.log("Initializing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: places
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
