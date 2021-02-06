import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchSongContainer from '../domain/song/addSong/SearchSongContainer';
import { SongsStackParamList } from '../navigation/SongsStack';
import { useTheme } from '../hooks/useTheme';

interface AddSongScreenProps {
  navigation: StackNavigationProp<SongsStackParamList, 'AddSong'>;
}

const AddSongScreen: React.FC<AddSongScreenProps> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='blue' />
      <SafeAreaView
        style={[styles.safeAreaView, { backgroundColor: theme.colors?.white }]}
      >
        <SearchSongContainer navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default AddSongScreen;
