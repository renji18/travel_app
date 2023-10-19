import { Image, StyleSheet } from "react-native"
import React from "react"

const NetworkImage = ({ uri, width, height, borderRadius }) => {
  return (
    <Image source={{ uri }} style={styles.image(width, height, borderRadius)} />
  )
}

export default NetworkImage

const styles = StyleSheet.create({
  image: (width, height, borderRadius) => ({
    width,
    height,
    borderRadius,
    resizeMode: "cover",
  }),
})
