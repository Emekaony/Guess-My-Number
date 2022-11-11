import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    let chosenNumber = parseInt(enteredNumber);
    /*
    Number must:
    1. Be an integer
    2. 0 <= Number <= 99
    */
    if (Number.isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber < 0) {
      Alert.alert("Invalid Number", "Number must be between 0 and 99", [
        {
          text: "ok",
          style: "destructive",
          onPress: resetInputHandler(),
        },
      ]);
      console.log("Invalid input");
      return;
    }

    props.onNumberPicked(chosenNumber);
    console.log("Confirm button has been pressed!");
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
    console.log("Reset button has been pressed");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        selectionColor={"#ddb52f"}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <View style={{ width: "50%" }}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={{ width: "50%" }}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default StartGameScreen;
