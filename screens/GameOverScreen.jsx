import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = ({ numberOfGuesses }) => {
  return (
    <View>
      <Text>Game over!</Text>
      <Text>It took the compuer {numberOfGuesses} guesses!</Text>
    </View>
  );
};

const styleles = StyleSheet.create({
  container: {},
});

export default GameOverScreen;
