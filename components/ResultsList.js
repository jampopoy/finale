import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { ResultsDetail } from "../components";


const ResultsList = ({ title, results }) => {
  if (!results.length) {
    return null;
  }
  
  return (
    <View>
      <Text style={{
        fontSize: 30,
        color:'yellow',
        textShadowColor:'black',
        textShadowRadius:5,
        fontWeight: 'bold',
        marginBottom: 8
      }}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item}/>;
        }}
      />
    </View>
  );
};

export default ResultsList;