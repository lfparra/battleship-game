import React from 'react';
import './App.css';
import TableGame from './views/TableGame';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-2 col-8 text-center">
          <h1>BattleShip Game</h1>
        </div>
      </div>
      <TableGame />
    </div>
  );
}

export default App;
