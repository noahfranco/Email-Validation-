import React from "react"; 

export const actionCreater = (name, bool) => {
    type: "CREATE_Vaild_List"
    payload: { 
        name: name 
        bool: bool
    }
}