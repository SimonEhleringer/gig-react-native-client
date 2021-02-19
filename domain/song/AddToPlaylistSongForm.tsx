import React, { Dispatch, SetStateAction } from "react";
import LoadingAndErrors from "../common/LoadingAndErrors";
import SongFormContainer from "./SongFormContainer";

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
      />
    </LoadingAndErrors>
  );
};

export default AddToPlaylistSongForm;
