import { useCallback, useRef } from 'react';
import * as Tone from 'tone';

export const useSynth = () => {
  const synth = useRef();

  const onPlayNote = useCallback(async ({ target: { value: note } }) => {
    if (!synth.current) {
      await Tone.start();
      synth.current = new Tone.Synth().toDestination();
    }
    synth.current.triggerAttackRelease(note, '8n');
  }, []);
  return { onPlayNote };
};
