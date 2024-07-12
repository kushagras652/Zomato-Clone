/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Home from './Screens/Home'
import StackNavigator from './navigation/StackNavigator';
import { BasketContext } from './Context';



function App(){
  return (
    <BasketContext>
       <StackNavigator/>
     </BasketContext>
 
  );
}
export default App;
