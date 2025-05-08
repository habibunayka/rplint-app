// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from './src/navigation/AppNavigator';
import EditProfilScreen from "./src/screens/EditProfilScreen";


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

