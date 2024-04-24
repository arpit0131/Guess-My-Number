import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { FontAwesome5 } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateNumberBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessrounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that is wrong', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }
    // direction ==> lower  or greater
    if (direction == 'lower') {
      //means current guess number is very high from actual so we need to reduce the max range
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    ); //now we need to exclude the currnt guess because guessing the same number again makes no sense
    setCurrentGuess(newRndNumber);
    setGuessrounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Game</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.insructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <FontAwesome5 name='plus' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <FontAwesome5 name='minus' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        {/* OR */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 34,
  },
  insructionText: {
    marginBottom: 12,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});