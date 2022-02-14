import React from 'react';

import { useSynth } from './useSynth';

const notes = ['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'B3', 'C4'];

export const Keyboard = () => {
  const { onPlayNote } = useSynth();
  return (
    <div>
      {notes.map(note => (
        <button key={note} onClick={onPlayNote} value={note}>
          {note}
        </button>
      ))}
    </div>
  );
};
