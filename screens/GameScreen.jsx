import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const generateRandomNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver, onGuessChanged }) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([
    { guess: initialGuess, id: initialGuess },
  ]);

  // this is a react hook that runs immediately after a component is rendered
  useEffect(() => {
    if (currentGuess === userNumber) {
      // trigger this function when the game is over!
      // this will switch us from the game screen to the gameover screen
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    onGuessChanged();
    console.log(
      `Current guess is: ${currentGuess}\nDirection is: ${direction}`
    );
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Liar", "You know that this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandomNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prev) => [
      { guess: newRandomNumber, id: newRandomNumber },
      ...prev,
    ]);
  }

  const roundRenderer = ({ item, index, separators }) => {
    return <PrimaryButton>{item.guess}</PrimaryButton>;
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonStyles}>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, "higher")}
            style={styles.button}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, "lower")}
            style={styles.button}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          renderItem={roundRenderer}
          data={guessRounds}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonStyles: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    width: "40%",
    marginVertical: 20,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
