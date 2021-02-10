import React, { useEffect, useRef, useState } from 'react';
import SongList from './SongList';
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from './slice';
import { ReduxState } from '../../config/store';
import RBSheet from 'react-native-raw-bottom-sheet';
import SongEntity from './SongEntity';

interface SongListContainerProps {}

const SongListContainer: React.FC<SongListContainerProps> = ({}) => {
  const dispatch = useDispatch();

  const bottomSheetRef = useRef<RBSheet>(null);

  const [bottomSheetSong, setBottomSheetSong] = useState<
    SongEntity | undefined
  >(undefined);

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  const state = useSelector((state: ReduxState) => state.song);

  const { loading, errors, songs } = state;

  const openBottomSheet = (song: SongEntity) => {
    //setBottomSheetSong(song);

    //setBottomSheetSong(songs.find((value) => value.songId === songId));

    setBottomSheetSong({ ...song });

    bottomSheetRef.current?.open();
  };

  return (
    <SongList
      songs={songs}
      loading={loading}
      errors={errors}
      bottomSheetRef={bottomSheetRef}
      openBottomSheet={openBottomSheet}
    />
  );
};

export default SongListContainer;
