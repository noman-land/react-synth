import { useSynth } from './useSynth';

const notes = ['C4', 'D4', 'E4', 'F4'];

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
