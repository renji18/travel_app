import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import AppBar from "../../components/Reusable/AppBar"
import { COLORS, SIZES } from "../../constants/theme"
import NetworkImage from "../../components/Reusable/NetworkImage"
import ReusableText from "../../components/Reusable/ReusableText"
import HeightSpacer from "../../components/Reusable/HeightSpacer"
import reusableStyle from "../../components/Reusable/reusable.style"
import { Rating } from "react-native-stock-star-rating"
import DescText from "../../components/Reusable/DescText"
import HotelMap from "../../components/Hotel/HotelMap"
import { Feather } from "@expo/vector-icons"
import ReviewsList from "../../components/Hotel/ReviewsList"
import ReusableBtn from "../../components/Reusable/ReusableBtn"

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.8,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
    reviews: [
      {
        _id: "64d38ff59af9119acfab0ece",
        review:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet soluta possimus sunt totam iste, numquam impedit reprehenderit saepe quisquam dolorem.",
        rating: 4.6,
        user: {
          _id: "64c38fd59af9119acfaec376",
          username: "John Doe",
          profile:
            "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg",
        },
        updatedAt: "2023-08-09",
      },
      {
        _id: "64d797f59af9119acfabce58",
        review:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet soluta possimus sunt totam iste, numquam impedit reprehenderit saepe quisquam dolorem.",
        rating: 4.6,
        user: {
          _id: "64c38ed59af9119acfaec376",
          username: "Zoe Doe",
          profile:
            "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg",
        },
        updatedAt: "2023-08-09",
      },
    ],
  }

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
      <View>
        <View style={styles.container}>
          <NetworkImage
            uri={hotel.imageUrl}
            width={"100%"}
            height={220}
            borderRadius={25}
          />
          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                color={COLORS.black}
                family={"medium"}
                size={SIZES.xLarge}
                text={hotel.title}
              />
              <HeightSpacer height={10} />
              <ReusableText
                color={COLORS.black}
                family={"medium"}
                size={SIZES.medium}
                text={hotel.location}
              />
              <HeightSpacer height={15} />
              <View style={reusableStyle.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#fd9942"}
                />
                <ReusableText
                  color={COLORS.gray}
                  family={"medium"}
                  size={SIZES.medium}
                  text={`(${hotel.review})`}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            color={COLORS.black}
            family={"medium"}
            size={SIZES.large}
            text={`Description`}
          />
          <HeightSpacer height={10} />
          <DescText text={hotel.description} />
          <HeightSpacer height={10} />
          <ReusableText
            color={COLORS.black}
            family={"medium"}
            size={SIZES.large}
            text={`Location`}
          />
          <HeightSpacer height={15} />
          <ReusableText
            color={COLORS.gray}
            family={"regular"}
            size={SIZES.small + 2}
            text={hotel.location}
          />
          <HotelMap coordinates={coordinates} />

          <View style={reusableStyle.rowWithSpace("space-between")}>
            <ReusableText
              color={COLORS.black}
              family={"medium"}
              size={SIZES.large}
              text={`Reviews`}
            />
            <TouchableOpacity>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10} />
          <ReviewsList data={hotel.reviews} />
        </View>
        <View
          style={[reusableStyle.rowWithSpace("space-between"), styles.bottom]}
        >
          <View>
            <ReusableText
              color={COLORS.black}
              family={"medium"}
              size={SIZES.large}
              text={`\$ ${hotel.price}`}
            />
            <HeightSpacer height={5} />
            <ReusableText
              color={COLORS.gray}
              family={"medium"}
              size={SIZES.medium}
              text={`Jan 01 - Dec 25`}
            />
          </View>
          <ReusableBtn
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            handlePress={() => navigation.navigate("SelectRoom")}
            text={"Select Room"}
            textColor={COLORS.white}
            width={(SIZES.width - 50) / 2.2}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HotelDetails

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 135,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20,
  },
  titleColumn: {
    padding: 15,
  },
  bottom: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    height: 90,
    paddingVertical: 20,
  },
})
