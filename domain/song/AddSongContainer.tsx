import React, { useEffect, useRef, useState } from 'react';
import AddSong from './AddSong';
import { useTheme } from '../../hooks/useTheme';
import { Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { createSong, CreateSongPayload } from './slice';
import { StackNavigationProp } from '@react-navigation/stack';
import { SongsStackParamList } from '../../navigation/SongsStack';

interface AddSongContainerProps {
  navigation: StackNavigationProp<SongsStackParamList, 'AddSong'>;
  initialTitle: string;
  initialInterpreter: string;
  initialTempo: number;
  initialNotes: string;
}

const AddSongContainer: React.FC<AddSongContainerProps> = ({
  navigation,
  initialTitle,
  initialInterpreter,
  initialTempo,
  initialNotes,
}) => {
  const dispatch = useDispatch();
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
  };

  const handleAddSong = () => {
    const payload: CreateSongPayload = {
      title,
      interpreter,
      tempo: +tempo,
      notes,
    };

    dispatch(createSong(payload));

    navigation.navigate('Songs');
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
      handleAddSong={handleAddSong}
    />
  );
};

export default AddSongContainer;
