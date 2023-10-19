import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import ReusableText from "../../Reusable/ReusableText"
import { COLORS, SIZES } from "../../../constants/theme"
import NetworkImage from "../../Reusable/NetworkImage"
import HeightSpacer from "../../Reusable/HeightSpacer"
import { useNavigation } from "@react-navigation/native"

const Country = ({ item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", {item})}
    >
      <View>
        <NetworkImage
          uri={item.imageUrl}
          width={85}
          height={85}
          borderRadius={12}
        />
        <HeightSpacer height={5} />
        <ReusableText
          text={item.country}
          family={"medium"}
          size={SIZES.medium}
          color={COLORS.black}
          textAlign={"center"}
        />
      </View>
    </TouchableOpacity>
  )
}

export default Country
