import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

class Quiz extends Component {
  render() {
    const { deck } = this.props;
    const { questions } = deck;
    return (
      <ScrollView style={styles.container}>
        {questions.length === 0 && (
          <Text style={styles.text}>
            Sorry you cannot take this quiz since there are no cards in the
            deck.
          </Text>
        )}
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
    backgroundColor: "#4933FF",
    borderRadius: 6,
    marginTop: 32
  },
  buttonText: {
    color: "white"
  }
});

function mapStateToProps({ decks }, { navigation }) {
  const deckTitle = navigation.getParam("title");
  const deck = decks[deckTitle];
  return {
    deck
  };
}

export default connect(mapStateToProps)(Quiz);
