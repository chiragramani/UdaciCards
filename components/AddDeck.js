import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions/decks";
import { saveDeck } from "../utils/api";

class AddDeck extends Component {
  state = {
    text: ""
  };

  addDeck = () => {
    const { text } = this.state;
    const { dispatch, navigation } = this.props;
    const action = addDeck(text);
    dispatch(action);
    saveDeck(text, action.deck);
    navigation.navigate('DeckDetail', { title: text } )
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Enter Deck Title'
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <TouchableOpacity
          onPress={this.addDeck}
          disabled={!this.state.text}
          style={styles.button}
        >
          <Text style={[styles.buttonText, styles.text]}>Create Deck</Text>
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

export default connect()(AddDeck);
