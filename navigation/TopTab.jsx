import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import TopBookings from "../screens/top/TopBookings"
import TopTrips from "../screens/top/TopTrips"
import TopInfo from "../screens/top/TopInfo"
import { COLORS, SIZES } from "../constants/theme"
import NetworkImage from "../components/Reusable/NetworkImage"
import AppBar from "../components/Reusable/AppBar"
import HeightSpacer from "../components/Reusable/HeightSpacer"
import ReusableText from "../components/Reusable/ReusableText"

const Tab = createMaterialTopTabNavigator()

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            borderRadius={0}
            height={300}
            uri={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg"
            }
            width={"100%"}
          />
          <AppBar
            top={40}
            left={20}
            right={20}
            // title={"Look for Hotels"}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />
          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg",
              }}
              style={styles.image}
            />
            <HeightSpacer height={5} />
            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"Renji"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
            <HeightSpacer height={5} />
            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"renji_riverstone@gmail.com"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.white}
              />
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  )
}

export default TopTab

const styles = StyleSheet.create({
  profile: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 110,
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    borderColor: COLORS.lightWhite,
    borderWidth: 2,
    borderRadius: 90,
  },
  name: {
    backgroundColor: COLORS.gray,
    borderRadius: 12,
    padding: 5,
  },
})
