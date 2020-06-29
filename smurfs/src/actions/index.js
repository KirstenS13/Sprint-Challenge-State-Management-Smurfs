import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";

export const getSmurfs = () => dispatch => {
    console.log("getSmurfs action creator");
    dispatch({type: GET_SMURFS_START});
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log("res", res);
            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log("err", err);
        })
}