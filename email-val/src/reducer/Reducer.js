
import {
    FETCH_API_DATA_START, 
    FETCH_API_DATA_SUCCESS, 
    FETCH_API_DATA_FAILURE 
}
from "../action/Action.js"; 

const initialState = {
    data: [], 
    compiled: false,
    error: "Something went wrong, try again later" 
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_API_DATA_START: 
        return {
            ...state, 
            isLoading: true, 
            error: "Start Failed"
        }
        case FETCH_API_DATA_SUCCESS: 
        return {
            ...state, 
            isLoading: ture,
            data: action.payload, 
            error: "Success Faild"
        }
        case FETCH_API_DATA_FAILURE: 
        return {
            ...state, 
            isLoading: false, 
            error: "Failure"
        }; 
        default: 
            return state;  
    }
}