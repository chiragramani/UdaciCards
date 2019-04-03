export const ADD_DECK = "ADD_DECK";
export const ADD_DECKS = "ADD_DECKS";
export const DELETE_DECK = "DELETE_DECK";

export function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  };
}

export function addDeck(deckName) {
  return {
    type: ADD_DECK,
    deck: {
      title: deckName,
      questions: []
    }
  };
}

export function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck
  };
}
