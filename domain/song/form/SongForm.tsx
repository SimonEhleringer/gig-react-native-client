import React, { RefObject } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FullTheme, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { MARGIN } from '../../../config/themes';
import Errors from '../../common/Errors';
import Button from '../../common/FormButton';
import FormContainer from '../../common/FormContainer';
import LoadingAndErrors from '../../common/LoadingAndErrors';

interface SongFormProps {
  theme: Partial<FullTheme>;

  loading: boolean;
  errors: string[];

  //getSongBpmLoading: boolean;
  //getSongBpmErrors: string[];

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

  handleSubmit: () => void;
}

const SongForm: React.FC<SongFormProps> = ({
  theme,

  loading,
  errors,

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

  handleSubmit,
}) => {
  return (
    <FormContainer>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ScrollView
            style={styles.subContainer}
            keyboardShouldPersistTaps='always'
          >
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

            <Button
              title='Speichern'
              onPress={handleSubmit}
              loading={loading}
            />

            <HideWithKeyboard>
              <Errors errors={errors} />
            </HideWithKeyboard>
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

export default SongForm;
