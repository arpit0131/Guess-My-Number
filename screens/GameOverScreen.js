import { View, Image, StyleSheet, Text } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over😉</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your device took <Text style={styles.highlighted}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlighted}>{userNumber}</Text>
      </Text>
      <PrimaryButton style={styles.btn} onPress={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primarry500,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    padding: 8,
  },
  highlighted: {
    fontFamily: 'open-sans-bold',
    color: Colors.primarry500,
    fontSize: 28,
  },
  btn: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
