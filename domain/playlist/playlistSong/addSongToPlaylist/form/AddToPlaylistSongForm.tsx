import React, { Dispatch, SetStateAction } from 'react';
import LoadingAndErrors from '../../../../common/LoadingAndErrors';
import SongFormContainer from '../../../../song/form/SongFormContainer';

interface AddToPlaylistSongFormProps {
  getSongBpmLoading: boolean;
  getSongBpmErrors: string[];

  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  interpreter: string;
  setInterpreter: Dispatch<SetStateAction<string>>;

  tempo: string;
  setTempo: Dispatch<SetStateAction<string>>;

  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;

  handleSubmit: () => void;

  loading: boolean;
  errors: string[];
}

const AddToPlaylistSongForm: React.FC<AddToPlaylistSongFormProps> = ({
  handleSubmit,
  title,
  setTitle,
  interpreter,
  setInterpreter,
  tempo,
  setTempo,
  notes,
  setNotes,
  getSongBpmLoading,
  getSongBpmErrors,
  loading,
  errors,
}) => {
  return (
    <LoadingAndErrors loading={getSongBpmLoading} errors={getSongBpmErrors}>
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

export default AddToPlaylistSongForm;
