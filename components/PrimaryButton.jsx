import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const pressedHandler = () => {
    console.log("Pressable has been pressed");
  };

  return (
    <View onPress={pressedHandler} style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                styles.buttonInnerContainerPressed,
                props.pressedStyle,
              ]
            : [styles.buttonInnerContainer, props.style]
        }
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonInnerContainerPressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
