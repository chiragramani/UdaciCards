import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { blue } from "../utils/colors";

export default function DeckCard({ deck }) {
  const { title, questions } = deck;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{questions.length} Cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 8,
    borderColor: blue,
    borderWidth: 2,
    margin: 16,
    padding: 16,
    justifyContent: "space-around",
    backgroundColor: blue
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});
