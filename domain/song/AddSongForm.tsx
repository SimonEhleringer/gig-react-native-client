import React, { Dispatch, SetStateAction } from 'react';
import LoadingAndErrors from '../common/LoadingAndErrors';
import SongFormContainer from './SongFormContainer';

interface AddSongFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  interpreter: string;
  setInterpreter: Dispatch<SetStateAction<string>>;

  tempo: string;
  setTempo: Dispatch<SetStateAction<string>>;

  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;

  getSongBpmLoading: boolean;
  getSongBpmErrors: string[];

  handleSubmit: () => void;
}

const AddSongForm: React.FC<AddSongFormProps> = ({
  getSongBpmErrors,
  getSongBpmLoading,
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
  return (
    <LoadingAndErrors loading={getSongBpmLoading} errors={getSongBpmErrors}>
      <SongFormContainer
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
    </LoadingAndErrors>
  );
};

export default AddSongForm;
