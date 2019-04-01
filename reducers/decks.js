import { ADD_DECKS } from "../actions/decks";

export function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECKS:
      const { decks } = action;
      return {
        ...state,
        ...decks
      };
    default:
      return state;
  }
}
