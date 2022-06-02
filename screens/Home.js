import React, { useState } from "react";
import { View, SafeAreaView, Text, ScrollView } from "react-native";

import { HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, FONTS, SIZES, asset } from "../constants";

import useResults from "../hooks/userResults";
import ResultsList from "../components/ResultsList";

const Home = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResults = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <>
        
        <View style={{ 
          zIndex: 0,
          padding: SIZES.base,  
          marginBottom: 0,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}
          style={{ 
            marginBottom: -9,
          }}>
          <HomeHeader
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            
          />
          {errorMessage ? <Text style={{ color: 'red'}}>{errorMessage}</Text> : null}
          
            <ResultsList title='Cheap' results={filterResults('$')} />
            <ResultsList title='MID' results={filterResults('$$')}/>
            <ResultsList title='Gangsta' results={filterResults('$$$')} />
            <ResultsList title='Bling Bling' results={filterResults('$$$$')} />
          </ScrollView>      
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 400, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </>
    </SafeAreaView>
  );
};

export default Home;