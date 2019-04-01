import { ADD_DECKS, DELETE_DECK, ADD_DECK } from "../actions/decks";

export function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECKS: {
      const { decks } = action;
      return {
        ...state,
        ...decks
      };
    }
    case DELETE_DECK: {
      const { deck } = action;
      return {
        ...Object.keys(state)
          .filter(aDeck => aDeck !== deck)
          .map(deck => state[deck])
      };
    }
    case ADD_DECK: {
      const { deck } = action;
      return {
        ...state,
        [deck.name]: deck
      };
    }
    default:
      return state;
  }
}
