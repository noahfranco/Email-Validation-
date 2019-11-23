import axios from "axios"; 

export const FETCH_API_DATA_START = "FETCH_API_DATA_START"; 
export const FETCH_API_DATA_SUCCESS = "FETCH_API_DATA_START"; 
export const FETCH_API_DATA_FAILER = "FETCH_API_DATA_FAILER"; 

const GetData = () => {
    dispatch({type: FETCH_API_DATA_START})
    axios
    .get("")
    .then(res => {
        console.log(res)
    dispatch({type: FETCH_API_DATA_SUCCESS})
    })
    .catch(error => {
        dispatch({type: FETCH_API_DATA_FAILER})
    }); 
};

export default GetData