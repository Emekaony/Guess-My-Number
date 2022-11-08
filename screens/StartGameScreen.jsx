import { StyleSheet, TextInput, View, Button } from "react-native";

import PrimaryButton from "../components/PrimaryButron";

const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({});

export default StartGameScreen;
