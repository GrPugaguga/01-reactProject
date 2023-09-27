import { useState } from 'react'
import OneSelection from './01-First-Game-XO/components/Button';
import Field from './01-First-Game-XO/components/Field';
import ResetParty from './01-First-Game-XO/components/ResetParty';
import Player from './01-First-Game-XO/components/Player';
import FirsWindow from './01-First-Game-XO/components/FirstWindow';
import "./App.css"


function App() {
  const [players, setPlayers] = useState({ 0: "", 1: "" })
  const [winner, setWinner] = useState("")
  const [table, setTable] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' })
  const [player, setPlayer] = useState(players[0])
  const [count, setCount] = useState(0)

  function changePlayer(e) {
    setCount((count + 1) % 2)
    setPlayer(players[count])

  }
  const resetParty = () => {
    setTable({ ...table, 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' })
    setWinner()

  }
  const winCounter = () => {
    if (winner == undefined && (table[1] === table[2] && table[2] === table[3] && table[1] != "" || table[4] === table[5] && table[5] === table[6] && table[4] != "" || table[7] === table[8] && table[8] === table[9] && table[7] != "" || table[1] === table[5] && table[5] === table[9] && table[1] != "" || table[3] === table[5] && table[5] === table[7] && table[3] != "" || table[3] === table[6] && table[6] === table[9] && table[3] != "" || table[1] === table[4] && table[4] === table[7] && table[1] != "" || table[2] === table[5] && table[5] === table[8] && table[2] != "")) {
      setWinner(players[count])
    }
  }



  return (
    <div className="App" onMouseMove={winCounter} >
      <div>
        <FirsWindow onClick={(e) => {
          setPlayers(JSON.parse(e.target.value))
          changePlayer()
        }} />
      </div>
      <div>
        <Player player={player} winner={winner} />
        <Field>
          <OneSelection player={table[1]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, [e.target.id]: player })
          }
          }
            id={1} />
          <OneSelection player={table[2]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 2: player })

          }
          }
            id={2} />
          <OneSelection player={table[3]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 3: player })

          }
          }
            id={3} />
          <OneSelection player={table[4]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 4: player })

          }
          }
            id={4} />
          <OneSelection player={table[5]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 5: player })

          }
          }
            id={5} />
          <OneSelection player={table[6]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 6: player })

          }
          }
            id={6} />
          <OneSelection player={table[7]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 7: player })

          }
          }
            id={7} />
          <OneSelection player={table[8]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 8: player })

          }
          }
            id={8} />
          <OneSelection player={table[9]} onClick={(e) => {
            !!!winner && !!!table[e.target.id] && changePlayer()
            !!!winner && !!!table[e.target.id] && setTable({ ...table, 9: player })

          }
          }
            id={9} />
        </Field>
        <ResetParty onClick={resetParty} />
      </div>
    </div >
  );
}

export default App;