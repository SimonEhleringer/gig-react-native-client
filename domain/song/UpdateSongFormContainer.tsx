import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import MainTab from '../../navigation/MainTab';
import { updateSong, UpdateSongPayload } from './slice';
import SongFormContainer from './SongFormContainer';

interface UpdateSongFormContainerProps {
  songId: string;
}

const UpdateSongFormContainer: React.FC<UpdateSongFormContainerProps> = ({
  songId,
}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [interpreter, setInterpreter] = useState('');
  const [tempo, setTempo] = useState('');
  const [notes, setNotes] = useState('');

  const state = useSelector((state: ReduxState) => state.song);
  const songs = state.songs;

  useEffect(() => {
    const songToEdit = songs.find((value) => value.songId === songId);

    if (!songToEdit) {
      return;
    }

    const { title, interpreter, tempo, notes } = songToEdit;

    setTitle(title);
    setInterpreter(interpreter);
    setTempo(tempo.toString());
    setNotes(notes);
  });

  const handleSubmit = () => {
    const payload: UpdateSongPayload = {
      songId,
      title,
      interpreter,
      tempo: +tempo,
      notes,
    };

    dispatch(updateSong(payload));
  };

  return (
    <SongFormContainer
      title={title}
      setTitle={setTitle}
      interpreter={interpreter}
      setInterpreter={setInterpreter}
      tempo={tempo}
      setTempo={setTempo}
      notes={notes}
      setNotes={setNotes}
      handleSubmit={handleSubmit}
    />
  );
};

export default UpdateSongFormContainer;
