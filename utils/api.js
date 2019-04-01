import { AsyncStorage } from "react-native";
const DECKS_STORAGE_KEY = "UdaciCards:Decks";

export function saveDeck(deckName, deck) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deckName]: deck
    })
  );
}

function formatDeckResults(results) {
  return results === null ? {} : JSON.parse(results);
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
}
