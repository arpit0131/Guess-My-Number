import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  function inputFieldHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be between 0 and 99', [
        { text: 'Okay!', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter the number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={enteredNumber}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={inputFieldHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 150,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 70,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
