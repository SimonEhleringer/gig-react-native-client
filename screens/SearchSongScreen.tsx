import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SongsStackParamList } from '../navigation/SongsStack';
import { useTheme } from '../hooks/useTheme';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import {
  BORDER_RADIUS_LESS,
  MARGIN,
  PADDING,
  PADDING_HALF,
} from '../config/themes';
import { useDispatch } from 'react-redux';
import { searchSongs } from '../domain/song/getSongBpmSong/slice';
import withBottomRoundedCorners from '../domain/common/withBottomRoundedCorners';
import withBackground from '../domain/common/withBackground';
import SearchSongScreenContent from '../domain/song/getSongBpmSong/SearchSongScreenContent';

interface SearchSongScreenProps {
  navigation: StackNavigationProp<SongsStackParamList, 'SearchSong'>;
}

const SearchSongScreen: React.FC<SearchSongScreenProps> = ({ navigation }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleSearch = (newSearch: string) => {
    setSearch(newSearch);

    //if (newSearch.length >= 3) {
    dispatch(searchSongs(newSearch));
    //}
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView
        style={[styles.safeAreaView, { backgroundColor: theme.colors?.white }]}
      >
        <View style={styles.header}>
          <Icon
            name='arrow-back'
            size={25}
            style={{ padding: PADDING_HALF }}
            onPress={handleGoBack}
          />

          <TextInput
            style={[
              styles.searchBar,
              { backgroundColor: theme.colors?.lightGrey },
            ]}
            placeholder='GetSongBPM durchsuchen...'
            keyboardType='web-search'
            onChangeText={handleSearch}
          />
        </View>

        <SearchSongScreenContent navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: PADDING,
  },
  searchBar: {
    borderRadius: BORDER_RADIUS_LESS,
    paddingVertical: PADDING_HALF,
    paddingHorizontal: PADDING,
    marginHorizontal: MARGIN,
    flex: 1,
    fontSize: 16,
  },
});

export default SearchSongScreen;
