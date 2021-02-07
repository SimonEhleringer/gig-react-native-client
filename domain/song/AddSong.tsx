import React, { RefObject } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FullTheme, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { MARGIN } from '../../config/themes';
import Button from '../common/FormButton';
import FormContainer from '../common/FormContainer';
import Paper from '../common/Paper';

interface AddSongProps {
  theme: Partial<FullTheme>;

  title: string;
  handleTitleSubmitEditing: () => void;
  handleTitleChanged: (newTitle: string) => void;

  interpreter: string;
  interpreterInputRef: RefObject<Input>;
  handleInterpreterSubmitEditing: () => void;
  handleInterpreterChanged: (newInterpreter: string) => void;

  tempo: string;
  tempoInputRef: RefObject<Input>;
  handleTempoSubmitEditing: () => void;
  handleTempoChanged: (newTempo: string) => void;

  notes: string;
  notesInputRef: RefObject<Input>;
  handleNotesChanged: (newNotes: string) => void;

  handleAddSong: () => void;
}

const AddSong: React.FC<AddSongProps> = ({
  theme,

  title,
  handleTitleSubmitEditing,
  handleTitleChanged,

  interpreter,
  interpreterInputRef,
  handleInterpreterSubmitEditing,
  handleInterpreterChanged,

  tempo,
  tempoInputRef,
  handleTempoSubmitEditing,
  handleTempoChanged,

  notes,
  notesInputRef,
  handleNotesChanged,

  handleAddSong,
}) => {
  return (
    <FormContainer>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ScrollView style={styles.subContainer}>
            <Input
              style={styles.formContent}
              inputStyle={{ color: theme.colors?.text }}
              placeholder='Titel'
              onSubmitEditing={handleTitleSubmitEditing}
              onChangeText={(val) => handleTitleChanged(val)}
              value={title}
              maxLength={50}
            />

            <View style={{ flexDirection: 'row' }}>
              <Input
                style={styles.formContent}
                ref={interpreterInputRef}
                containerStyle={{ flex: 4 }}
                inputStyle={{ color: theme.colors?.text }}
                placeholder='Interpreter'
                onSubmitEditing={handleInterpreterSubmitEditing}
                onChangeText={(val) => handleInterpreterChanged(val)}
                value={interpreter}
                maxLength={50}
              />
              <Input
                style={styles.formContent}
                ref={tempoInputRef}
                containerStyle={{ flex: 1 }}
                inputStyle={{ color: theme.colors?.text }}
                placeholder='Tempo'
                keyboardType='number-pad'
                onSubmitEditing={handleTempoSubmitEditing}
                onChangeText={(val) => handleTempoChanged(val)}
                value={tempo.toString()}
              />
            </View>
            <Input
              style={styles.formContent}
              ref={notesInputRef}
              inputStyle={{ color: theme.colors?.text }}
              placeholder='Notizen (Zeilenumbrüche möglich)'
              multiline
              onChangeText={(val) => handleNotesChanged(val)}
              value={notes}
              maxLength={256}
            />

            <Button title='Hinzufügen' onPress={handleAddSong} />
          </ScrollView>
        </View>
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '100%',
  },
  formContent: {
    marginVertical: MARGIN,
  },
});

{
  /* <Input
  ref={passwordInputRef}
  inputStyle={{ color: theme.colors?.text }}
  style={styles.loginFormContent}
  leftIcon={{
    type: 'material-icons',
    name: 'lock',
    color: theme.colors?.text,
  }}
  onChangeText={(val) => handlePasswordChanged(val)}
  placeholder='Passwort'
  secureTextEntry
  onSubmitEditing={handleLogin}
/>; */
}

export default AddSong;
