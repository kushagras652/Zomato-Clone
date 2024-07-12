import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import HotelRoom from '../Screens/HotelRoom'

const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="HotelRoom" component={HotelRoom}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})