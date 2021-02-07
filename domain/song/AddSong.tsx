import React, { RefObject } from 'react';
import { Text, View } from 'react-native';
import { FullTheme, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../common/Container';
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
}) => {
  return (
    <ScrollView>
      <Container>
        <Paper hasPadding>
          <Input
            inputStyle={{ color: theme.colors?.text }}
            placeholder='Titel'
            onSubmitEditing={handleTitleSubmitEditing}
            onChangeText={(val) => handleTitleChanged(val)}
            value={title}
            maxLength={50}
          />

          <View style={{ flexDirection: 'row' }}>
            <Input
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
            ref={notesInputRef}
            inputStyle={{ color: theme.colors?.text }}
            placeholder='Notizen (Zeilenumbrüche möglich)'
            multiline
            onChangeText={(val) => handleNotesChanged(val)}
            value={notes}
            maxLength={256}
          />
        </Paper>
      </Container>
    </ScrollView>
  );
};

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
