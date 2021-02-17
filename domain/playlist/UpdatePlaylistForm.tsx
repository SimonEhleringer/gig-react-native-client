import React, { Dispatch, SetStateAction } from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import PlaylistFormContainer from './PlaylistFormContainer';

interface UpdatePlaylistFormProps {
  handleSubmit: () => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  isStateLoading: boolean;
}

const UpdatePlaylistForm: React.FC<UpdatePlaylistFormProps> = ({
  handleSubmit,
  name,
  setName,
  isStateLoading,
}) => {
  return (
    <LoadingAndErrors loading={isStateLoading} errors={[]}>
      <PlaylistFormContainer
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
      />
    </LoadingAndErrors>
  );
};

export default UpdatePlaylistForm;
