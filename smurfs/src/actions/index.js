import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => dispatch => {
    console.log("getSmurfs action creator");
    dispatch({type: GET_SMURFS_START});
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log("res from getSmurfs", res);
            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log("err from getSmurfs", err);
        })
};

export const addSmurf = formState => dispatch => {
    console.log("addSmurf action creator");
    dispatch({type: ADD_SMURF, payload: formState});
    axios
        .post()
        .then(res => {
            console.log("res from addSmurf", res);
        })
        .catch(err => {
            console.log("err from addSmurf", err)
        })
}