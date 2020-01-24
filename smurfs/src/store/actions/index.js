import axios from 'axios';

export const fetchSmurfs = () => {
    dispatch({
        type: 'FETCH_SMURFS'
    })
};