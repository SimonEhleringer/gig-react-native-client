import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../../config/store";
import { useOnUpdateEffect } from "../../../hooks/useOnUpdateEffect";
import MainTab from "../../../navigation/MainTab";
import { SongsStackParamList } from "../../../navigation/SongsStack";
import { updateSong, UpdateSongPayload } from "../slice";
import SongFormContainer from "./SongFormContainer";
import UpdateSongForm from "./UpdateSongForm";

interface UpdateSongFormContainerProps {
  songId: string;
}

const UpdateSongFormContainer: React.FC<UpdateSongFormContainerProps> = ({
  songId,
}) => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    SongsStackParamList,
    "UpdateSong"
  > = useNavigation();

  const [stateLoading, setStateLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [interpreter, setInterpreter] = useState("");
  const [tempo, setTempo] = useState("");
  const [notes, setNotes] = useState("");

  const state = useSelector((state: ReduxState) => state.song);
  const { songs, loading, errors } = state;

  useEffect(() => {
    setStateLoading(true);

    const songToEdit = songs.find((value) => value.songId === songId);

    if (!songToEdit) {
      return;
    }

    const { title, interpreter, tempo, notes } = songToEdit;

    setTitle(title);
    setInterpreter(interpreter);
    setTempo(tempo.toString());
    setNotes(notes);

    setStateLoading(false);
  }, []);

  useOnUpdateEffect(() => {
    if (!loading && errors.length === 0) {
      navigation.navigate("Songs");
    }
  }, [loading, errors]);

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
    <UpdateSongForm
      title={title}
      setTitle={setTitle}
      interpreter={interpreter}
      setInterpreter={setInterpreter}
      tempo={tempo}
      setTempo={setTempo}
      notes={notes}
      setNotes={setNotes}
      handleSubmit={handleSubmit}
      stateLoading={stateLoading}
      loading={loading}
      errors={errors}
    />
  );
};

export default UpdateSongFormContainer;
