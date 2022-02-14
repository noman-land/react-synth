import { useCallback, useRef, useState } from 'react';
import * as Tone from 'tone';

export const useSynth = () => {
  const synth = useRef();
  const [started, setStarted] = useState(false);

  const onPlayNote = useCallback(
    ({ target: { value: note } }) => {
      if (!started) {
        Tone.start();
        synth.current = new Tone.Synth().toDestination();
        setStarted(true);
      }
      synth.current.triggerAttackRelease(note, '8n');
    },
    [started]
  );
  return { onPlayNote };
};
