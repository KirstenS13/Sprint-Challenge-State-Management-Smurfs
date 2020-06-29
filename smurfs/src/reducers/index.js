import { GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, ADD_SMURF } from "../actions";

const initialState = {
    smurfs: [],
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        default:
            return state;
    }
}