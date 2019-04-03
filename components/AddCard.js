import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { NavigationActions } from "react-navigation";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/decks";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  addCard = () => {
    const { question, answer } = this.state;
    const { dispatch, deck, navigation } = this.props;
    dispatch(addCard({ question, answer }, deck));
    addCardToDeck({ question, answer }, deck);
    navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Question"
            onChangeText={text => this.setState({ question: text })}
            value={this.state.question}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Answer"
            onChangeText={text => this.setState({ answer: text })}
            value={this.state.answer}
          />
        </View>
        <TouchableOpacity
          onPress={this.addCard}
          disabled={!(question && answer)}
          style={styles.button}
        >
          <Text style={[styles.buttonText, styles.text]}>Add Card</Text>
        </TouchableOpacity>
      </View>
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
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "stretch",
    marginTop: 32,
    paddingLeft: 10
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

export default connect(mapStateToProps)(AddCard);
