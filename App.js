import { useCallback, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [pickedNumber, setpickedNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guesses, setGuesses] = useState(0);

  // show the splash screen while these fonts are being loaded
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // useCallback returns a memoized function.
  // this means tha the funciton is only recalculated anytime the dependencies change.
  // Used to improve performance
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const numberOfGuessesHandler = () => {
    setGuesses((guesses) => {
      // state is read-only. SO this is how you update it by passing a function
      return guesses + 1;
    });
  };

  const newGameHandler = () => {
    setGuesses(0);
    setpickedNumber(null);
  };

  const pickedNumberHandler = (pickedNumber) => {
    setpickedNumber(pickedNumber);
    setGameOver(false);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  let screen = <StartGameScreen onNumberPicked={pickedNumberHandler} />;

  // once we have picked a number, go to the GameScreen
  if (pickedNumber) {
    console.log(`Sending ${pickedNumber} to gameScreen as prop`);
    screen = (
      <GameScreen
        userNumber={pickedNumber}
        onGameOver={gameOverHandler}
        onGuessChanged={numberOfGuessesHandler}
      />
    );
  }

  if (gameOver && pickedNumber) {
    screen = (
      <GameOverScreen
        numberOfGuesses={guesses}
        userNumber={pickedNumber}
        newGameSelected={newGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
      onLayout={onLayoutRootView}
    >
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
