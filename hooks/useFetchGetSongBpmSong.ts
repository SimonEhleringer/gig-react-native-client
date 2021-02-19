import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getErrorsFromError } from "../domain/common/saga/shared";
import { requestSong } from "../domain/song/getSongBpmSong/saga/requests";

export const useFetchGetSongBpmSong = (
  getSongBpmSongId: string,
  setTitle: Dispatch<SetStateAction<string>>,
  setInterpreter: Dispatch<SetStateAction<string>>,
  setTempo: Dispatch<SetStateAction<string>>
) => {
  const [getSongBpmLoading, setGetSongBpmLoading] = useState(false);
  const [getSongBpmErrors, setGetSongBpmErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!getSongBpmSongId) {
      return;
    }

    setGetSongBpmLoading(true);

    requestSong(getSongBpmSongId)
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

  return {
    getSongBpmLoading,
    getSongBpmErrors,
  };
};
