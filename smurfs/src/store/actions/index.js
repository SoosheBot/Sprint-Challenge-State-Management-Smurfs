import axios from "axios";

export const START_FETCH = "START_FETCH";
FETCH_SUCCESS = 'FETCH_SUCCESS';

export const FETCH_FAIL = 'FETCH_FAIL';

export const ADD_SMURF = 'ADD_SMURF';
ADD_SUCCESS = 'ADD_SUCCESS';
ADD_FAIL = 'ADD_FAIL';

export const fetchSmurfs = () => {
  dispatch({
    type: START_FETCH
  });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('It/s Smurfing! It/s Smurfing!', res.data);
        dispatch({ type: FETCH_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log("Oh no, Papa Smurf!", err);
      dispatch({ type: FETCH_FAIL, payload: err.response });
    });
};
