import { useCallback, useState } from 'react';
import './App.css';

import * as Tone from 'tone';

const notes = ['C4', 'D4', 'E4', 'F4'];

let synth;

function App() {
  const [started, setStarted] = useState(false);

  const createClickHandler = useCallback(
    note => () => {
      if (!started) {
        Tone.start();
        synth = new Tone.Synth().toDestination();
        setStarted(true);
      }
      synth.triggerAttackRelease(note, '8n');
    },
    [synth]
  );

  return (
    <div className="App">
      {notes.map(note => (
        <button key={note} onClick={createClickHandler(note)}>
          {note}
        </button>
      ))}
    </div>
  );
}

export default App;
