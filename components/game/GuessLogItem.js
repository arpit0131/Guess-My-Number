import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>
        Opponent's Guess:<Text style={styles.guessText}>{guess}</Text>
      </Text>
    </View>
  );
};
export default GuessLogItem;

const styles = StyleSheet.create({
  listItems: {
    borderColor: Colors.primarry500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.accent500,
    width: '100%',
    elevation: 4,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
  guessText: {
    color: Colors.primarry500,
    fontFamily: 'open-sans-bold',
  },
});
