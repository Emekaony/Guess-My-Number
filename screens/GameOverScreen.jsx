import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

const GameOverScreen = ({ numberOfGuesses, userNumber, newGameSelected }) => {
  return (
    <View style={styles.rootContainer}>
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

const deviceWidth = Dimensions.get("window").deviceWidth;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverTitle: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    marginTop: 20,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: "hidden",
  },
  imageStyle: {},
  textStyle: {
    textAlign: "center",
  },
});

export default GameOverScreen;
