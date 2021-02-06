import React from 'react';
import { ListItem } from 'react-native-elements';
import GetSongBpmSongModel from './GetSongBpmSongModel';

interface SearchSongItemProps {
  getSongBpmSong: GetSongBpmSongModel;
}

const SearchSongItem: React.FC<SearchSongItemProps> = ({ getSongBpmSong }) => {
  const { title, interpreter, tempo } = getSongBpmSong;

  return (
    <ListItem
      bottomDivider={true}
      containerStyle={{ backgroundColor: 'transparent' }}
    >
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle>{interpreter}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default SearchSongItem;
