import React, { useEffect, useRef, useState } from 'react';
import AddSong from './AddSong';
import { useTheme } from '../../hooks/useTheme';
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { createSong, CreateSongPayload } from './slice';
import { StackNavigationProp } from '@react-navigation/stack';
import { SongsStackParamList } from '../../navigation/SongsStack';
import { requestSong } from './getSongBpmSong/saga/requests';
import { getErrorsFromError } from '../common/saga/shared';
import { ReduxState } from '../../config/store';

interface AddSongContainerProps {
  navigation: StackNavigationProp<SongsStackParamList, 'AddSong'>;
  id?: string;
}

const AddSongContainer: React.FC<AddSongContainerProps> = ({
  navigation,
  id,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [getSongBpmLoading, setGetSongBpmLoading] = useState(false);
  const [getSongBpmErrors, setGetSongBpmErrors] = useState<string[]>([]);

  const [title, setTitle] = useState('');
  const [interpreter, setInterpreter] = useState('');
  const [tempo, setTempo] = useState('');
  const [notes, setNotes] = useState('');

  const interpreterInputRef = useRef<Input>(null);
  const tempoInputRef = useRef<Input>(null);
  const notesInputRef = useRef<Input>(null);

  const state = useSelector((state: ReduxState) => state.song);
  const loading = state.loading;
  const errors = state.errors;

  useEffect(() => {
    if (!id) {
      return;
    }

    setGetSongBpmLoading(true);

    requestSong(id)
      .then((result) => {
        const response = result.data;
        const { title, artist, tempo } = response.song;

        if (title) {
          setTitle(title);
        }

        if (artist) {
          setInterpreter(artist.name);
        }

        if (tempo) {
          setTempo(tempo.toString());
        }

        setGetSongBpmLoading(false);
      })
      .catch((e) => {
        setGetSongBpmErrors(getErrorsFromError(e));
        setGetSongBpmLoading(false);
      });
  }, []);

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

  const handleAddSong = () => {
    const payload: CreateSongPayload = {
      title,
      interpreter,
      tempo: +tempo,
      notes,
      onComplete: () => {
        navigation.navigate('Songs');
      },
    };

    dispatch(createSong(payload));
  };

  return (
    <AddSong
      theme={theme}
      loading={loading}
      errors={errors}
      getSongBpmLoading={getSongBpmLoading}
      getSongBpmErrors={getSongBpmErrors}
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
