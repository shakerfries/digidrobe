//define your app component and logic 
//can create UI here 

import React from 'react'; 
import { StyleSheet, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import BottomTabNavigation from './src/navigation/BottomTabNavigation'; 

export default function App() {
  return (
    <NavigationContainer> 
      <BottomTabNavigation />
    </NavigationContainer>
   
  );
}

