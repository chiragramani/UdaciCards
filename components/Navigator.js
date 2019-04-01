import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import AddDeck from "./AddDeck";
import DecksList from "./DecksList";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const AppNavigator = createBottomTabNavigator(
  {
    Decks: {
      screen: DecksList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="cards-playing-outline"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      style: {
        height: 56,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default createAppContainer(AppNavigator);
