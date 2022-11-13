import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default InstructionText;