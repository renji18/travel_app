import { TouchableOpacity, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import reusableStyle from "../../components/Reusable/reusable.style"
import ReusableText from "../../components/Reusable/ReusableText"
import { COLORS, SIZES, TEXT } from "../../constants/theme"
import { AntDesign } from "@expo/vector-icons"
import homeStyle from "./home.style"
import HeightSpacer from "../../components/Reusable/HeightSpacer"
import Places from "../../components/Home/Places"
import Recommendations from "../../components/Home/Recommendations"
import BestHotels from "../../components/Home/BestHotels"

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusableStyle.container}>
      <View>
        <View style={reusableStyle.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hey User!"}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={homeStyle.box}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={SIZES.xLarge} />
        <ReusableText
          text={"Places"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <Places />
        <HeightSpacer height={15} />
        <Recommendations />
        <HeightSpacer height={30} />
        <BestHotels />
      </View>
    </SafeAreaView>
  )
}

export default Home
