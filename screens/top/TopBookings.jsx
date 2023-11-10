import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import ReusableTile from "../../components/Reusable/ReusableTile"
import HeightSpacer from "../../components/Reusable/HeightSpacer"
import { COLORS } from "../../constants/theme"
import { useNavigation } from "@react-navigation/native"
import reusableStyle from "../../components/Reusable/reusable.style"

const TopBookings = () => {
  const navigation = useNavigation()
  const hotels = [
    {
      _id: "64c674d23cfa5e847bcd5430",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Seaside Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
      rating: 4.9,
      review: "1204 Reviews",
      location: "Miami Beach, FL",
    },
    {
      _id: "64c675183cfa5e847bcd5433",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Mountain Lodge",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
      rating: 4.5,
      review: "12024 Reviews",
      location: "Aspen, CO",
    },
    {
      _id: "64c675be3cfa5e847bcd5439",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Family-Friendly Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
      rating: 4.6,
      review: "12854 Reviews",
      location: "Orlando, FL",
    },
    {
      _id: "64c67442776ed29f19727fd7",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Luxury Hotel 1",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
      rating: 4.7,
      review: "1204 Reviews",
      location: "New York City, NY",
    },
  ]
  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={hotels}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ borderColor: COLORS.lightWhite }}>
            <ReusableTile
              item={item}
              handlePress={() => navigation.navigate("HotelDetails", item._id)}
            />
            <View style={reusableStyle.rowWithSpace("space-between")}></View>
            <HeightSpacer height={15} />
          </View>
        )}
      />
    </View>
  )
}

export default TopBookings

const styles = StyleSheet.create({})
