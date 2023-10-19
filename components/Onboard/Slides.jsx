import {
  View,
  Image,
  // SafeAreaView
} from "react-native"
import React from "react"
import { styles } from "./slides.style"
import { SafeAreaView } from "react-native-safe-area-context"
import ReusableText from "../Reusable/ReusableText"
import { COLORS, SIZES } from "../../constants/theme"
import ReusableBtn from "../Reusable/ReusableBtn"
import HeightSpacer from "../Reusable/HeightSpacer"
import { useNavigation } from "@react-navigation/native"

const Slides = ({ item }) => {
  const navigation = useNavigation()
  return (
    <View>
      <SafeAreaView>
        <Image source={item.image} style={styles.image} />
        <View style={styles.stack}>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.xLarge}
            color={COLORS.white}
          />
          <HeightSpacer height={40} />
          <ReusableBtn
            handlePress={() => navigation.navigate("Bottom")}
            text={"Let's Go"}
            width={(SIZES.width - 50) / 2.2}
            backgroundColor={COLORS.red}
            borderColor={COLORS.red}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Slides
