import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPress, style }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={
          (
            { pressed } //event
          ) =>
            pressed
              ? [styles.btnInnerContainer, styles.pressed] //passing multiple styling dynamically
              : [styles.btnInnerContainer,style] //default style
        }
        onPress={onPress}
        android_ripple={{ color: Colors.ripple600 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 50,
    margin: 4,
    overflow: 'hidden',
  },
  btnInnerContainer: {
    backgroundColor: Colors.primarry500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
