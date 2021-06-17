import { GET_JOKE, GET_JOKE_SUCCESS, GET_JOKE_FAIL } from "../actions";

const INITIAL_STATE = {
  jokes: [],
  loading: false,
}

function jokesReducer(state = INITIAL_STATE, action ) {
  switch (action.type) {
    case GET_JOKE:
      return { ...state, loading: true };
    case GET_JOKE_SUCCESS:
      return { ...state, jokes: action.payload, loading: false, };
    case GET_JOKE_FAIL:
      return { ...state, errorMessage: action.payload, loading: false, };
    default:
      return state;
  }
}

export default jokesReducer;
