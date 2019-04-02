import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { fetchDecks } from "../utils/api";
import { connect } from "react-redux";
import { AppLoading } from "expo";
import { addDecks } from "../actions/decks";
import DeckCard from "./DeckCard";

class DecksList extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    fetchDecks()
      .then(decks => dispatch(addDecks(decks)))
      .then(() =>
        this.setState({
          ready: true
        })
      )
      .catch(error =>
        console.log("Error while fetching initial decks: ", error)
      );
  }

  onTap = item => {};

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onTap(item)}>
        <DeckCard deck={item} />
      </TouchableOpacity>
    );
  };

  render() {
    const { ready } = this.state;
    const { decks } = this.props;
    if (ready === false) {
      return <AppLoading />;
    }
    if (decks.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Added Decks will be visible here</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={decks}
        keyExtractor={(item, index) => item.title}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapStateToProps({ decks }) {
  const items = Object.keys(decks).map(deck => decks[deck]);
  return {
    decks: items
  };
}

export default connect(mapStateToProps)(DecksList);
