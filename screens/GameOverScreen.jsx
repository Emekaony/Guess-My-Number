import { View, Text, StyleSheet, Image } from "react-native";

import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ numberOfGuesses, userNumber, newGameSelected }) => {
  return (
    <View>
      <View style={styles.gameOverTitle}>
        <InstructionText>Game Over!</InstructionText>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/gameover.jpg")}
          style={styles.imageStyle}
        />
      </View>
      <Card>
        <InstructionText style={styles.textStyle}>
          Took the computer{" "}
          <Text style={{ color: "white" }}>{numberOfGuesses}</Text> rounds to
          guess the number <Text style={{ color: "white" }}>{userNumber}</Text>
        </InstructionText>
      </Card>
      <PrimaryButton
        style={{ width: "40%", alignSelf: "center", marginTop: 20 }}
        onPress={newGameSelected}
      >
        Start new Game
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverTitle: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  imageStyle: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  textStyle: {
    textAlign: "center",
  },
});

export default GameOverScreen;
