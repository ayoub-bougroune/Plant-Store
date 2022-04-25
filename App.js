import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

import {StatusBar} from 'react-native';
import COLORS from './app/config/colors';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;