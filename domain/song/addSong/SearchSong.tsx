import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import {
  BORDER_RADIUS,
  BORDER_RADIUS_LESS,
  MARGIN,
  MARGIN_HALF,
  PADDING,
  PADDING_HALF,
} from '../../../config/themes';
import { FullTheme, Input } from 'react-native-elements';
import SearchSongContentContainer from './SearchSongContentContainer';

interface SearchSongProps {
  theme: Partial<FullTheme>;
  handleSearch: (newSearch: string) => void;
  handleGoBack: () => void;
}

const SearchSong: React.FC<SearchSongProps> = ({
  theme,
  handleSearch,
  handleGoBack,
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: PADDING,
        }}
      >
        <Icon
          name='arrow-back'
          size={25}
          style={{ padding: PADDING_HALF }}
          onPress={handleGoBack}
        />

        <TextInput
          style={{
            backgroundColor: theme.colors?.lightGrey,
            borderRadius: BORDER_RADIUS_LESS,
            paddingVertical: PADDING_HALF,
            paddingHorizontal: PADDING,
            marginHorizontal: MARGIN,
            flex: 1,
            fontSize: 16,
          }}
          placeholder='GetSongBPM durchsuchen...'
          keyboardType='web-search'
          onChangeText={handleSearch}
        />
      </View>

      <SearchSongContentContainer />
    </>
  );
};

export default SearchSong;
