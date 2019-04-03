import { ADD_DECKS, DELETE_DECK, ADD_DECK, ADD_CARD } from "../actions/decks";

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
      const { [deck.title]: value, ...remaining } = state;
      return {
        ...remaining
      };
    }
    case ADD_DECK: {
      const { deck } = action;
      return {
        ...state,
        [deck.title]: deck
      };
    }
    case ADD_CARD: {
      const { question, deck } = action;
      return {
        ...state,
        [deck.title]: {
          ...state[deck.title],
          questions: state[deck.title].questions.concat(question)
        }
      };
    }

    default:
      return state;
  }
}
