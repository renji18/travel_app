import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { COLORS, SIZES } from "../../../constants/theme"
import reusableStyle from "../../Reusable/reusable.style"
import NetworkImage from "../../Reusable/NetworkImage"
import WidthSpacer from "../../Reusable/WidthSpacer"
import ReusableText from "../../Reusable/ReusableText"
import Rating from "../../Reusable/Rating"
import DescText from "../../Reusable/DescText"

const ReviewTile = ({ review }) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={reusableStyle.rowWithSpace("space-between")}>
        <View style={reusableStyle.rowWithSpace("flex-start")}>
          <NetworkImage
            borderRadius={10}
            height={54}
            uri={review.user.profile}
            width={54}
          />
          <WidthSpacer width={20} />
          <View style={{ width: "80%" }}>
            <View style={reusableStyle.rowWithSpace("space-between")}>
              <ReusableText
                color={COLORS.black}
                family={"medium"}
                size={SIZES.small + 2}
                text={review.user.username}
              />
              <WidthSpacer width={"30%"} />
              <View style={reusableStyle.rowWithSpace("space-between")}>
                <Rating rating={review.rating} />
                <WidthSpacer width={10} />
                <ReusableText
                  color={COLORS.black}
                  family={"medium"}
                  size={SIZES.small + 2}
                  text={review.updatedAt}
                />
              </View>
            </View>
            <DescText text={review.review} lines={2} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ReviewTile

const styles = StyleSheet.create({
  reviewBorder: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: COLORS.lightGrey,
  },
})
