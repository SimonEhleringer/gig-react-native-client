import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSong, CreateSongPayload } from './slice';
import { requestSong } from './getSongBpmSong/saga/requests';
import { getErrorsFromError } from '../common/saga/shared';
import AddSongForm from './AddSongForm';

interface AddSongFormContainerProps {
  id?: string;
}

const AddSongFormContainer: React.FC<AddSongFormContainerProps> = ({ id }) => {
  const dispatch = useDispatch();

  const [getSongBpmLoading, setGetSongBpmLoading] = useState(false);
  const [getSongBpmErrors, setGetSongBpmErrors] = useState<string[]>([]);

  const [title, setTitle] = useState('');
  const [interpreter, setInterpreter] = useState('');
  const [tempo, setTempo] = useState('');
  const [notes, setNotes] = useState('');

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

  const handleSubmit = () => {
    const payload: CreateSongPayload = {
      title,
      interpreter,
      tempo: +tempo,
      notes,
    };

    dispatch(createSong(payload));
  };

  return (
    <AddSongForm
      getSongBpmLoading={getSongBpmLoading}
      getSongBpmErrors={getSongBpmErrors}
      handleSubmit={handleSubmit}
      title={title}
      setTitle={setTitle}
      interpreter={interpreter}
      setInterpreter={setInterpreter}
      tempo={tempo}
      setTempo={setTempo}
      notes={notes}
      setNotes={setNotes}
    />
  );
};

export default AddSongFormContainer;
