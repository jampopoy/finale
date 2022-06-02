import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, FocusedStatusBar } from '../components';

import React, { useState, useEffect, useCallback } from 'react'
import yelp from '../api/yelp';
import { useRoute } from '@react-navigation/native';
import { SubInfo, RestoRating, RestoReview } from '../components/SubInfo';

const DetailsHeader = ({ item }) => (
  <View style={{ width: 400, height: "100%" }}>
    <Image
      source={{ uri: item }} 
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
  </View>
);

const Details = ({ navigation }) => {
  const route = useRoute();
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = useCallback(async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }, []);

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View>
        <View style={{ width: "100%", height: "85%" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return <DetailsHeader navigation={navigation} item={item}/>
            }}
          />
          <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
          />

          <SubInfo name={result.name} />
        
        <View style={{ width: "100%", padding: SIZES.font }}>
        <RestoRating rate={result.rating} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RestoReview review={result.review_count} />
          </View>
         </View> 
        </View>  
      </View>      
    </SafeAreaView>
  )
};  

export default Details;