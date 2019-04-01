import React, { Component } from "react";
import { View, Text } from "react-native";
import { fetchDecks } from "../utils/api";
import { connect } from "react-redux";

class DecksList extends Component {
  render() {
    return (
      <View>
        <Text>List Component</Text>
      </View>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DecksList);
