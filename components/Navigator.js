import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import AddDeck from "./AddDeck";
import DecksList from "./DecksList";
import DeckDetail from "./DeckDetail";
import AddCard from "./AddCard";
import Quiz from "./Quiz";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { blue, white } from "../utils/colors";

import {SafeAreaView} from 'react-navigation';
SafeAreaView.setStatusBarHeight(0);

const TabNavigator = createBottomTabNavigator(
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

const stackNavigator = createStackNavigator({
  Decks: {
    screen: TabNavigator
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: () => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: () => ({
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => ({
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    })
  }
});

export default createAppContainer(stackNavigator);
