import {ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/AntDesign'
import Category from '../component/Category'
import FirstImage from '../component/FirstImage'
import ItemComponent from '../component/ItemComponent'
import hotels from '../data/hotels'
import Hotels from '../component/Hotels'


const Home = () => {
    const data=hotels;
    return (
        <ScrollView style={{backgroundColor:'#F0F0F0'}}>
            <View style={styles.container}>
            <Icons name="search1" color='#E52B50' size={24} />
            <TextInput
            style={styles.text}
            placeholder='Restaurant name,cusine or a dish'/>
        </View>
        <Category/>
        <FirstImage/>
        <ItemComponent/>
        {data.map ((item)=> <Hotels restaurant={item}/>)}
      
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        // flex:1,
        backgroundColor: "#D8D8D8",
        flexDirection:'row',
        alignItems:'center',
        padding:2,
       borderRadius:6,
        margin:10,
        borderColor:'grey',
        borderWidth:2,
    },
    text: {
        paddingLeft:5,
    }
})