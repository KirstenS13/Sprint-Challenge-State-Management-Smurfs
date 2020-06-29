import { GET_SMURFS_SUCCESS } from "../actions";

const initialState = {
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state;
    }
}