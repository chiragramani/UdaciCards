import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import { blue, white, red } from "../utils/colors";
import { deleteDeck } from "../actions/decks";
import { NavigationActions } from "react-navigation";
import { deleteDeckFromDB } from "../utils/api";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { deck } = nextProps;
    return deck !== null;
  }

  addCard = () => {};

  startQuiz = () => {};

  deleteDeck = () => {
    const { dispatch, deck, navigation } = this.props;
    dispatch(deleteDeck(deck));
    navigation.dispatch(NavigationActions.back());
    deleteDeckFromDB(deck);
  };

  render() {
    const { deck } = this.props;
    const { title, questions } = deck;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{questions.length} Cards</Text>
        <TouchableOpacity onPress={this.startQuiz} style={styles.button}>
          <Text style={[styles.buttonText, styles.text]}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.addCard} style={styles.button}>
          <Text style={[styles.buttonText, styles.text]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.deleteDeck}
          style={[styles.button, styles.deleteButton]}
        >
          <Text style={[styles.buttonText, styles.text]}>Delete Deck</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: blue,
    borderRadius: 6,
    marginTop: 32
  },
  deleteButton: {
    backgroundColor: red
  },
  buttonText: {
    color: white
  }
});

function mapStateToProps({ decks }, { navigation }) {
  const deckTitle = navigation.getParam("title");
  const deck = decks[deckTitle] || null;
  return {
    deck
  };
}

export default connect(mapStateToProps)(DeckDetail);
