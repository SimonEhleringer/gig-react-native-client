import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSong, CreateSongPayload } from "../slice";
import { requestSong } from "../getSongBpmSong/saga/requests";
import { getErrorsFromError } from "../../common/saga/shared";
import AddSongForm from "./AddSongForm";
import { ReduxState } from "../../../config/store";
import { useOnUpdateEffect } from "../../../hooks/useOnUpdateEffect";
import { StackNavigationProp } from "@react-navigation/stack";
import { SongsStackParamList } from "../../../navigation/SongsStack";
import { useNavigation } from "@react-navigation/native";

interface AddSongFormContainerProps {
  id?: string;
}

const AddSongFormContainer: React.FC<AddSongFormContainerProps> = ({ id }) => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<
    SongsStackParamList,
    "AddSong"
  > = useNavigation();

  const [getSongBpmLoading, setGetSongBpmLoading] = useState(false);
  const [getSongBpmErrors, setGetSongBpmErrors] = useState<string[]>([]);

  const [title, setTitle] = useState("");
  const [interpreter, setInterpreter] = useState("");
  const [tempo, setTempo] = useState("");
  const [notes, setNotes] = useState("");

  const state = useSelector((state: ReduxState) => state.song);
  const loading = state.loading;
  const errors = state.errors;

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

  useOnUpdateEffect(() => {
    if (!loading && errors.length === 0) {
      navigation.navigate("Songs");
    }
  }, [loading, errors]);

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
      loading={loading}
      errors={errors}
    />
  );
};

export default AddSongFormContainer;
