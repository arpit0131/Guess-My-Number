import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    alignItems: 'center',
    marginHorizontal: 25,
    padding: 16,
    backgroundColor: Colors.appBackground,
    borderRadius: 10,
    elevation: 4,
  },
});
