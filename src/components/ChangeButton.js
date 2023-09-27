import { useState } from "react";

function ChangeButton(props) { 
const [count, setCount] = useState(1)
    function counter() { 
        setCount((count+1)%2)
    }
    return (
        <div>
            {!!count && <button onClick={counter}></button>}
            { !!!count && props.children}
        </div>
    
    )
}

export default ChangeButton;