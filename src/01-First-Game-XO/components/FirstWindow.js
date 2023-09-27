import { useState } from "react";
function FirsWindow(props) { 
    const [data, setData] = useState({0: "X",1: "O"})
    function handleFormSubmit(event) { 
        event.preventDefault();
    }

    function handleInputChange(text,name) { 

        return (setData({ ...data, [name]: text.target.value }))
        
    }

    return (
        <>
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit } className="submitForm">
            <label className="PlayerSymbol">Player1: 
                    <input type="text" value={data[0]} maxLength={ 2} onChange={(e) => handleInputChange(e, '0')} />
            </label>
            <label className="PlayerSymbol">Player2: 
                <input type="text" value={ data[1]} maxLength={ 2} onChange={(e) => handleInputChange(e,'1')} />
            </label>
                <button type="submit" onClick={props.onClick} value={JSON.stringify(data)} >Login</button>
        </form>
        </>
)


}
export default FirsWindow;