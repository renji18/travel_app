import { StyleSheet, Text } from "react-native"
import React from "react"

const ReusableText = ({ text, family, size, color, textAlign }) => {
  return (
    <Text style={styles.textStyle(family, size, color, textAlign)}>{text}</Text>
  )
}

export default ReusableText

const styles = StyleSheet.create({
  textStyle: (family, size, color, textAlign) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign,
  }),
})
