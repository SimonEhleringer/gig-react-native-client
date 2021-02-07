import React from 'react';
import { ListItem } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import GetSongBpmSongModel from './GetSongBpmSongModel';

interface GetSongBpmSongProps {
  getSongBpmSong: GetSongBpmSongModel;
  hasBottomDivider: boolean;
  handleSongPress: () => void;
}

const GetSongBpmSong: React.FC<GetSongBpmSongProps> = ({
  getSongBpmSong,
  hasBottomDivider,
  handleSongPress,
}) => {
  const { title, interpreter } = getSongBpmSong;

  return (
    <ListItem
      bottomDivider={hasBottomDivider}
      containerStyle={{ backgroundColor: 'transparent' }}
      onPress={handleSongPress}
      Component={TouchableWithoutFeedback}
    >
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle>{interpreter}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default GetSongBpmSong;
