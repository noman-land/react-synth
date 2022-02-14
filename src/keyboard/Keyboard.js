import React, { useCallback, useEffect, useState } from 'react';

import { useSynth } from './useSynth';

export const Keyboard = () => {
  const [notes, setNotes] = useState([
    'C3',
    'D3',
    'Eb3',
    'F3',
    'G3',
    'Ab3',
    'B3',
    'C4',
  ]);
  const [lastNotePlayed, setLastNotePlayed] = useState();
  const { onPlayNote } = useSynth();

  const handleClick = useCallback(
    e => {
      onPlayNote(e);
      setLastNotePlayed(e.target.value);
    },
    [onPlayNote]
  );

  useEffect(() => {
    if (lastNotePlayed === 'C4' && notes[6] === 'B3') {
      const newNotes = notes.slice();
      newNotes[6] = 'Bb3';
      setNotes(newNotes);
    } else if (lastNotePlayed !== 'C4' && notes[6] === 'Bb3') {
      const newNotes = notes.slice();
      newNotes[6] = 'B3';
      setNotes(newNotes);
    }
  }, [lastNotePlayed, notes]);

  return (
    <div>
      {notes.map(note => (
        <button key={note} onClick={handleClick} value={note}>
          {note}
        </button>
      ))}
    </div>
  );
};
