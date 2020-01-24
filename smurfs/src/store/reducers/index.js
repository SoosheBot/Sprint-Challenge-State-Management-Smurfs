import { START_FETCH, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_SUCCESS, ADD_FAIL } from '../actions';


const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

