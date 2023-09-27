function Player(props) { 
    return (
        <>
            {!!!props.winner && <h1>Ход игрока: {props.player}</h1>}
            {!!props.winner && <h1>Победил игрок: {props.winner}</h1>}
        </>
    )

}
export default Player