export const GET_JOKE = 'GET_JOKE';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_FAIL = 'GET_JOKE_FAIL';

export const getJoke = () => ({
  type: GET_JOKE,
});

export const getJokeSuccess = (payload) => ({
  type: GET_JOKE_SUCCESS,
  payload
});

export const getJokeFail = (payload) => ({
  type: GET_JOKE_FAIL,
  payload
});

export const jokeThunk = (text) =>  (dispatch) => {
  dispatch(getJoke());
  fetch(`https://icanhazdadjoke.com/search?term=${text}`, { method: 'GET',
    headers: {
      'Accept': 'application/json',
    } })
      .then((response) => response.json())
      .then((jokes) => dispatch(getJokeSuccess(jokes.results)))
      .catch((err) => dispatch(getJokeFail(err)))
}
