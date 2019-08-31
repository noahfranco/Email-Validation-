import React from "react"; 

const EmailInput = () => {

    const handleSubmit = (event) => {
        event.preventDefault() 
    }

    const handleChange = (event) => {
        event.setItem({
            [event.target.name] : event.target.value
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit}> 
        <input 
            tpye="test"
            placeholder="Input Email"
            // value={}    
            onChange={handleChange}   
         /> 
        <button onClick={handleChange}> Test </button> 
        </form>
        </>
    )
}

export default EmailInput; 