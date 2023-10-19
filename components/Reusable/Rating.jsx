import { StyleSheet, View } from "react-native"
import React from "react"
import reusableStyle from "./reusable.style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import WidthSpacer from "./WidthSpacer"
import ReusableText from "./ReusableText"

const Rating = ({ rating }) => {
  return (
    <View style={reusableStyle.rowWithSpace("flex-start")}>
      <MaterialCommunityIcons name="star" size={20} color={"#fd9942"} />
      <WidthSpacer width={5} />
      <ReusableText
        text={rating}
        family={"medium"}
        size={15}
        color={"#fd9942"}
      />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})
