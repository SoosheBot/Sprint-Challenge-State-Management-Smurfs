import { START_FETCH, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_SUCCESS, ADD_FAIL } from '../actions';


export const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCH:
            return {
                ...state,
                isFetching: !state.isFetching,
                error:''
            };
        case FETCH_SUCCESS:
            return {
                isFetching: state.isFetching,
                error: '',
                smurfs:action.payload
            };
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: state.isFetching
            };
        case ADD_SMURF:
            return {
                ...state,
                isPosting: state.isPosting,
            };
        case ADD_SUCCESS:
            return {
                ...state,
                isPosting: !state.isPosting,
            };
        case ADD_FAIL:
            return {
                ...state,
                isPosting: state.isPosting,
                error: action.payload,
            };
            // case DELETE_SMURF:
            //     return 
            //         state.smurfs.filter(deleteComplete => !deleteComplete.isFetching);
                    
            // case DELETE_SUCCESS:
            //     return {
            //         isFetching: state.isFetching,
            //         error: '',
            //         smurfs:action.payload
            //     };
            // case DELETE_FAIL:
            //     return {
            //         ...state,
            //         error: action.payload,
            //         isFetching: state.isFetching
            //     };
        default:
            return state;
    };
};



