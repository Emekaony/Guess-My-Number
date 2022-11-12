import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNumber, setpickedNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setpickedNumber(pickedNumber);
  };

  // conditionally render start or game screen based on whether a number has been chosen or not.
  // pass a funciton through props that's gonna be called when a number is successifully chosen
  // we hold that number as a state variable so the component is rerendered and the new screen takes effect
  let screen = <StartGameScreen onNumberPicked={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
