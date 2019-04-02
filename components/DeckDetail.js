import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class DeckDetail extends Component {
  render() {
    return (
      <View>
        <Text>My Deck Detail</Text>
      </View>
    );
  }
}

// function mapStateToProps({ decks }) {
//     const deck = decks
//   return {

//   };
// }

export default connect()(DeckDetail);
