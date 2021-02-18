import React from 'react';
import { StatusBar, StyleSheet, TextInput, View } from 'react-native';
import {
  BORDER_RADIUS_LESS,
  MARGIN,
  PADDING,
  PADDING_HALF,
} from '../../../config/themes';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { FullTheme } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SearchBarHeaderProps {
  theme: Partial<FullTheme>;
  handleGoBack: () => void;
  handleSearch: (newSearch: string) => void;
}

const SearchBarHeader: React.FC<SearchBarHeaderProps> = ({
  theme,
  handleGoBack,
  handleSearch,
}) => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={{ backgroundColor: theme.colors?.white }}>
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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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

export default SearchBarHeader;
