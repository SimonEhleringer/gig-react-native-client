import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../config/store';
import { CreateUpdatePlaylistRequest } from './saga/shared';
import { updatePlaylist, UpdatePlaylistPayload } from './slice';
import UpdatePlaylistForm from './UpdatePlaylistForm';

interface UpdatePlaylistFormContainerProps {
  playlistId: string;
}

const UpdatePlaylistFormContainer: React.FC<UpdatePlaylistFormContainerProps> = ({
  playlistId,
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [isStateLoading, setIsStateLoading] = useState(true);

  const state = useSelector((state: ReduxState) => state.playlist);
  const playlists = state.playlists;

  useEffect(() => {
    const playlist = playlists.find((value) => value.playlistId === playlistId);

    if (!playlist) {
      return;
    }

    const { name } = playlist;
    setName(name);

    setIsStateLoading(false);
  }, []);

  const handleSubmit = () => {
    const payload: UpdatePlaylistPayload = {
      playlistId,
      name,
    };

    dispatch(updatePlaylist(payload));
  };

  return (
    <UpdatePlaylistForm
      handleSubmit={handleSubmit}
      name={name}
      setName={setName}
      isStateLoading={isStateLoading}
    />
  );
};

export default UpdatePlaylistFormContainer;
