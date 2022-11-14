import { Text, StyleSheet } from "react-native";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    width: 300,
    maxWidth: "80%",
  },
});

export default Title;
