import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: String;
  variant: "default" | "primary";
  onPress: () => void;
}
const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroungColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12,13,52, 0.05)";
  const color = variant === "primary" ? "#FFF" : "#0c0d34";

  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor: backgroungColor }]}
    >
      <Text style={[styles.label, { color: color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
  },
});

Button.defaultProps = { variant: "default" };

export default Button;
