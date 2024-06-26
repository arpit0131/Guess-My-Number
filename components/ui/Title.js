import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.colorWhite,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.colorWhite,
    borderRadius: 10,
    padding: 12,
    marginTop: 30,
  },
});
