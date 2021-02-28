import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PlaylistFormContainer from './PlaylistFormContainer';
import { createPlaylist, CreatePlaylistPayload } from '../slice';
interface CreatePlaylistFormContainerProps {}

const CreatePlaylistFormContainer: React.FC<CreatePlaylistFormContainerProps> = ({}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleSubmit = () => {
    const payload: CreatePlaylistPayload = {
      name,
    };

    dispatch(createPlaylist(payload));
  };

  return (
    <PlaylistFormContainer
      name={name}
      setName={setName}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreatePlaylistFormContainer;
