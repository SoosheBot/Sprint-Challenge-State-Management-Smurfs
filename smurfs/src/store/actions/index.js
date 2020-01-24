import axios from "axios";

export const START_FETCH = "START_FETCH";
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

export const fetchSmurfs = () => dispatch => {
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

export const addSmurfs = (newSmurf) => dispatch => {
  dispatch({
    type: ADD_SMURF
  });

  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        console.log('It/s Smurfing! It/s Smurfing! Post smurf success!', res.data);
        dispatch({ type: ADD_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log("Oh no, Papa Smurf! Post smurf failed!", err);
      dispatch({ type: ADD_FAIL, payload: err.response });
    });
};
