import React from 'react';
import { ListItem } from 'react-native-elements';
import GetSongBpmSongModel from './GetSongBpmSongModel';

interface GetSongBpmSongProps {
  getSongBpmSong: GetSongBpmSongModel;
  hasBottomDivider: boolean;
}

const GetSongBpmSong: React.FC<GetSongBpmSongProps> = ({
  getSongBpmSong,
  hasBottomDivider,
}) => {
  const { title, interpreter } = getSongBpmSong;

  return (
    <ListItem
      bottomDivider={hasBottomDivider}
      containerStyle={{ backgroundColor: 'transparent' }}
    >
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle>{interpreter}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default GetSongBpmSong;
