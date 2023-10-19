import { StyleSheet } from "react-native"
import { SIZES } from "../../constants/theme"

export const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width:SIZES.width,
    height: SIZES.height
  },
  stack: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
})
