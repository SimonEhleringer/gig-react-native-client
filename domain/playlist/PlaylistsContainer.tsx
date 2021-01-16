import React, { useState } from 'react';
import Playlists from './Playlists';
import PlaylistModel from './PlaylistModel';

interface PlaylistsContainerProps {}

const PlaylistsContainer: React.FC<PlaylistsContainerProps> = ({}) => {
  const playlistModels: PlaylistModel[] = [
    {
      PlaylistId: 1,
      Name: 'TestPlaylist1',
      Songs: [
        {
          SongId: 1,
          Name: 'TestSong1',
          Artist: 'TestArtist1',
          Tempo: 123,
        },
        {
          SongId: 2,
          Name: 'TestSong2',
          Artist: 'TestArtist2',
          Tempo: 98,
        },
      ],
    },
    {
      PlaylistId: 2,
      Name: 'TestPlaylist1',
      Songs: [
        {
          SongId: 3,
          Name: 'TestSong3',
          Artist: 'TestArtist3',
          Tempo: 123,
        },
        {
          SongId: 4,
          Name: 'TestSong4',
          Artist: 'TestArtist4',
          Tempo: 98,
        },
      ],
    },
  ];

  const [playlists, setPlaylists] = useState(playlistModels);

  return <Playlists playlists={playlists} />;
};

export default PlaylistsContainer;
