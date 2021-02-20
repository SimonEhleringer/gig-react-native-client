import React, { Dispatch, SetStateAction } from 'react';
import LoadingAndErrors from '../../common/LoadingAndErrors';
import SongFormContainer from './SongFormContainer';

interface UpdateSongFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  interpreter: string;
  setInterpreter: Dispatch<SetStateAction<string>>;

  tempo: string;
  setTempo: Dispatch<SetStateAction<string>>;

  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;

  handleSubmit: () => void;

  stateLoading: boolean;

  loading: boolean;
  errors: string[];
}

const UpdateSongForm: React.FC<UpdateSongFormProps> = ({
  handleSubmit,
  title,
  setTitle,
  interpreter,
  setInterpreter,
  tempo,
  setTempo,
  notes,
  setNotes,
  stateLoading,
  loading,
  errors,
}) => {
  return (
    <LoadingAndErrors loading={stateLoading} errors={[]}>
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
        loading={loading}
        errors={errors}
      />
    </LoadingAndErrors>
  );
};

export default UpdateSongForm;
