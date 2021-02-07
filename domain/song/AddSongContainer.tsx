import React, { useEffect, useRef, useState } from 'react';
import AddSong from './AddSong';
import { useTheme } from '../../hooks/useTheme';
import { Input } from 'react-native-elements';

interface AddSongContainerProps {
  initialTitle: string;
  initialInterpreter: string;
  initialTempo: number;
  initialNotes: string;
}

const AddSongContainer: React.FC<AddSongContainerProps> = ({
  initialTitle,
  initialInterpreter,
  initialTempo,
  initialNotes,
}) => {
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [interpreter, setInterpreter] = useState('');
  const [tempo, setTempo] = useState('');
  const [notes, setNotes] = useState('');

  const interpreterInputRef = useRef<Input>(null);
  const tempoInputRef = useRef<Input>(null);
  const notesInputRef = useRef<Input>(null);

  useEffect(() => {
    setTitle(initialTitle);
    setInterpreter(initialInterpreter);
    setTempo(initialTempo.toString());
    setNotes(initialNotes);
  }, []);

  const handleTitleSubmitEditing = () => {
    interpreterInputRef.current?.focus();
  };

  const handleInterpreterSubmitEditing = () => {
    tempoInputRef.current?.focus();
  };

  const handleTempoSubmitEditing = () => {
    notesInputRef.current?.focus();
  };

  const handleTitleChanged = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleInterpreterChanged = (newInterpreter: string) => {
    setInterpreter(newInterpreter);
  };

  const handleTempoChanged = (newTempo: string) => {
    if (
      !isNaN(+newTempo) &&
      +newTempo >= 0 &&
      +newTempo <= 999 &&
      Number.isInteger(+newTempo)
    ) {
      setTempo(newTempo);
    }
  };

  const handleNotesChanged = (newNotes: string) => {
    setNotes(newNotes);

    console.log(newNotes);
  };

  return (
    <AddSong
      theme={theme}
      title={title}
      interpreter={interpreter}
      tempo={tempo}
      notes={notes}
      handleTitleSubmitEditing={handleTitleSubmitEditing}
      handleInterpreterSubmitEditing={handleInterpreterSubmitEditing}
      handleTempoSubmitEditing={handleTempoSubmitEditing}
      handleTitleChanged={handleTitleChanged}
      handleInterpreterChanged={handleInterpreterChanged}
      handleTempoChanged={handleTempoChanged}
      handleNotesChanged={handleNotesChanged}
      interpreterInputRef={interpreterInputRef}
      tempoInputRef={tempoInputRef}
      notesInputRef={notesInputRef}
    />
  );
};

export default AddSongContainer;
