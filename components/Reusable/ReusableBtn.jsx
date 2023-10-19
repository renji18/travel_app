import { StyleSheet, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SIZES } from "../../constants/theme"

const ReusableBtn = ({
  handlePress,
  text,
  textColor,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={styles.btnOpacity(
        width,
        backgroundColor,
        borderWidth,
        borderColor
      )}
      onPress={handlePress}
    >
      <Text style={styles.btnText(textColor)}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ReusableBtn

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnOpacity: (width, backgroundColor, borderWidth, borderColor) => ({
    width,
    backgroundColor,
    borderWidth,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderColor,
    borderRadius: SIZES.small,
  }),
})
