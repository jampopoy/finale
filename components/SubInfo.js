import React from "react";
import { View, Image, Text } from "react-native";

import { FONTS, COLORS, SIZES, SHADOWS, assets } from "../constants";

//hardcodedpeople
const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};
//hardcodedpeople
export const People = () => {
  return (
    <View style={{ flexDirection: "row", }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};
//hardcodedpeople

export const RestoRating = ({ rate }) => {
  return (
    <View>
      <Text style={{ fontStyle: 'italic' }}>Average rating: {rate} ⭐</Text>
    </View>
  )
};

export const RestoReview = ({ review }) => {
  return (
    <View>
      <Text style={{ fontStyle: 'italic'}}>No. of Reviews: {review}</Text>
    </View>
  )
};

export const RestoName = ({ name }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.medium,
          color: COLORS.primary,
          fontWeight: 'bold'
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export const SubInfo = ({ name }) => {
  return (
    <View style={{
      width: 377,
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <People />
      <RestoName name={name}/>
    </View>
  )
};