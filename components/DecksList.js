import React, { Component } from "react";
import { View, Text } from "react-native";
import { fetchDecks } from "../utils/api";
import { connect } from "react-redux";

class DecksList extends Component {
  render() {
    const { decks } = this.props;
    return (
      <View>
        <Text>List Component</Text>
      </View>
    );
  }
}

function mapStateToProps({ decks }) {
  const items = Object.keys(decks).map(deck => decks[deck]);
  return {
    decks: items
  };
}

export default connect(mapStateToProps)(DecksList);
