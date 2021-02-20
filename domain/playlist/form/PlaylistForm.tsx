import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FullTheme, Input } from 'react-native-elements';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { MARGIN } from '../../../config/themes';
import Errors from '../../common/Errors';
import FormContainer from '../../common/FormContainer';
import FormButton from '../../common/FormButton';

interface PlaylistFormProps {
  theme: Partial<FullTheme>;

  name: string;
  handleNameChanged: (newName: string) => void;

  handleSubmit: () => void;
  loading: boolean;
  errors: string[];
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({
  theme,
  name,
  handleNameChanged,
  handleSubmit,
  loading,
  errors,
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
              placeholder='Name'
              onSubmitEditing={handleSubmit}
              onChangeText={(val) => handleNameChanged(val)}
              value={name}
              maxLength={50}
            />

            <FormButton
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

export default PlaylistForm;
