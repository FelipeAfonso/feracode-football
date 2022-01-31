import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import tw from 'twrnc';
export const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={tw`text-blue-600 font-bold underline text-3xl`}>
            Teste
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
