import React from 'react';
import { StatusBar, StyleSheet, TextInput, View, Platform } from 'react-native';
import {
  BORDER_RADIUS_LESS,
  MARGIN,
  PADDING,
  PADDING_HALF,
} from '../../../config/themes';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { FullTheme } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableRipple } from 'react-native-paper';

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
        <View
          style={[
            styles.header,
            { borderBottomColor: theme.colors?.lightGrey },
          ]}
        >
          <TouchableRipple
            onPress={handleGoBack}
            borderless
            style={{ borderRadius: 50 }}
          >
            <Icon
              name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
              size={25}
              style={{ padding: PADDING_HALF }}
            />
          </TouchableRipple>

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
    borderBottomWidth: 0.5,
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
