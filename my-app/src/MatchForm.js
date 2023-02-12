import React, { useState } from 'react';

function MatchForm({ onSubmit }) {
  const [firstSet, setFirstSet] = useState('');
  const [secondSet, setSecondSet] = useState('');
  const [thirdSet, setThirdSet] = useState('');
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ firstSet, secondSet, thirdSet, playerOne, playerTwo });
    setFirstSet('');
    setSecondSet('');
    setThirdSet('');
    setPlayerOne('');
    setPlayerTwo('');
  };

  return (
    <div className="match-form">
        <h1>Logg ny kamp</h1>
      <form onSubmit={handleSubmit}>
        <input name="playerOne" placeholder="Player One Name" value={playerOne} onChange={e => setPlayerOne(e.target.value)} />
        <input name="playerTwo" placeholder="Player Two Name" value={playerTwo} onChange={e => setPlayerTwo(e.target.value)} />
        <input name="firstSet" placeholder="First Set" value={firstSet} onChange={e => setFirstSet(e.target.value)} />
        <input name="secondSet" placeholder="Second Set" value={secondSet} onChange={e => setSecondSet(e.target.value)} />
        <input name="thirdSet" placeholder="Third Set (optional)" value={thirdSet} onChange={e => setThirdSet(e.target.value)} />
        <button type="submit">Log Match</button>
      </form>
    </div>
  );
}

export default MatchForm;
