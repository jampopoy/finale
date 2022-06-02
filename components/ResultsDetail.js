import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, RestoRating, RestoReview } from './SubInfo';
import { RectButton, CircleButton } from "./Button";

const ResultsDetail = ({ result }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        marginRight: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}>
        <Image
          source={{ uri: result.image_url}}
          resizeMode= 'cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      
      <SubInfo name={result.name} />
    
    <View style={{ width: "100%", padding: SIZES.font }}>
        <RestoRating rate={result.rating} />

        <View
          style={{
            marginTop: -SIZES.base,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RestoReview review={result.review_count} />
          
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { id: result.id })}
          />
        </View>
      </View>
    </View>
  );
};

export default ResultsDetail;


