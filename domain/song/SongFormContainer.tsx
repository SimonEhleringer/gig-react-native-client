import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Input } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { useTheme } from '../../hooks/useTheme';
import { SongsStackParamList } from '../../navigation/SongsStack';
import SongForm from './SongForm';
import { Keyboard } from 'react-native';

interface SongFormContainerProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  interpreter: string;
  setInterpreter: Dispatch<SetStateAction<string>>;

  tempo: string;
  setTempo: Dispatch<SetStateAction<string>>;

  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;

  handleSubmit: () => void;
}

const SongFormContainer: React.FC<SongFormContainerProps> = ({
  handleSubmit,
  title,
  setTitle,
  interpreter,
  setInterpreter,
  tempo,
  setTempo,
  notes,
  setNotes,
}) => {
  const theme = useTheme();
  const navigation: StackNavigationProp<
    SongsStackParamList,
    'AddSong'
  > = useNavigation();

  const interpreterInputRef = useRef<Input>(null);
  const tempoInputRef = useRef<Input>(null);
  const notesInputRef = useRef<Input>(null);

  const state = useSelector((state: ReduxState) => state.song);
  const loading = state.loading;
  const errors = state.errors;

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (loading === false && errors.length === 0) {
        navigation.navigate('Songs');
      }
    }
  }, [loading, errors]);

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

  const handleSubmitOverridden = () => {
    Keyboard.dismiss();

    handleSubmit();
  };

  return (
    <SongForm
      theme={theme}
      loading={loading}
      errors={errors}
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
      handleSubmit={handleSubmitOverridden}
    />
  );
};

export default SongFormContainer;
