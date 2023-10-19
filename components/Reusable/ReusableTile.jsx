import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import reusableStyle from "./reusable.style"
import { COLORS, SIZES, TEXT } from "../../constants/theme"
import NetworkImage from "./NetworkImage"
import WidthSpacer from "./WidthSpacer"
import ReusableText from "./ReusableText"
import HeightSpacer from "./HeightSpacer"
import Rating from "./Rating"

const ReusableTile = ({ item, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={reusableStyle.rowWithSpace("flex-start")}>
        <NetworkImage
          borderRadius={12}
          height={80}
          uri={item.imageUrl}
          width={80}
        />
        <WidthSpacer width={15} />

        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={8} />
          <ReusableText
            text={item.location}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />
          <HeightSpacer height={8} />
          <View style={reusableStyle.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />
            <WidthSpacer width={5} />
            <ReusableText
              text={`(${item.review})`}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ReusableTile

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
})
