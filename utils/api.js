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

export function addCardToDeck(question, deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    const updatedDeck = data[deck.title];
    updatedDeck.questions = deck.questions.concat(question);
    return saveDeck(deck.title, updatedDeck);
  });
}

export function deleteDeckFromDB({ title }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[title] = undefined;
    delete data[title];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}

function formatDeckResults(results) {
  return results === null ? {} : JSON.parse(results);
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
}
