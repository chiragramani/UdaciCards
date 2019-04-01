import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions/decks";

class AddDeck extends Component {
  state = {
    text: ""
  };

  addDeck = () => {
    const { text } = this.state;
    const { dispatch } = this.props;
    dispatch(addDeck(text));
    this.setState({
      text: ""
    });
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.textInput}
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
    marginTop: 32
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
