import React, { useState } from "react";
import MatchForm from "./MatchForm";

function App() {
  const [matches, setMatches] = useState([]);

  const addMatch = match => {
    setMatches([...matches, match]);
  };

  const deleteMatch = index => {
    setMatches(matches.filter((match, i) => i !== index));
  };

  return (
    <div>
      <MatchForm onSubmit={addMatch} />
      <hr />
      <ul>
        {matches.map((match, index) => (
          <li key={index}>
            {match.firstSet} - {match.secondSet} - {match.thirdSet} - {match.playerOne} - {match.playerTwo}
            <button onClick={() => deleteMatch(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

