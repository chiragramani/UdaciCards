export const ADD_DECKS = "ADD_DECKS";
export const DELETE_DECK = "DELETE_DECK";

export function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  };
}

export function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck
  };
}
