

function OneSelection(props) { 

    return (
        <div>
            <button className="Selection" onClick={props.onClick} id={ props.id}>{ props.player}</button>
        </div>
    )

} 
export default OneSelection;