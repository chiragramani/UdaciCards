export const ADD_DECKS = "ADD_DECKS";

export function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  };
}
