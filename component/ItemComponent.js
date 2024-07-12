import { StyleSheet, Text, View, FlatList ,Image} from 'react-native'
import React from 'react'

import dosa from '../assests/dosa.jpg'
import chinesse from '../assests/chinesse.jpg'
import pizza from '../assests/pizza.jpg'
import burger from '../assests/burger.jpg'
import icecream from '../assests/icecream.jpg'
import momos from '../assests/momos.jpg'
import rolls from '../assests/rolls.jpg'
import paneer from '../assests/paneer.jpg'
import thali from '../assests/thali.jpg'
import cake from '../assests/cake.jpg'
import biryani from '../assests/biryani.jpg'

const ItemComponent = () => {
    const list = [
        {
            id: 1,
            imageuri: dosa,
            name:"Dosa"
        },
        {
            id: 2,
            imageuri: pizza,
            name:'Pizza'
        },{
            id: 3,
            imageuri: burger,
            name:'Burger'
        },{
            id: 4,
            imageuri: icecream,
            name:'Ice Cream'
        },{
            id: 5,
            imageuri: biryani,
            name:'Biryani'
        },{
            id: 6,
            imageuri: cake,
            name:'Cake'
        },{
            id: 7,
            imageuri: rolls,
            name:'Rolls'
        },{
            id: 8,
            imageuri: momos,
            name:'Momos'
        },{
            id: 9,
            imageuri: paneer,
            name:'Paneer'
        },
        {
            id: 10,
            imageuri: thali,
            name:'Thali'
        },
        {
            id: 11,
            imageuri: chinesse,
            name:'Chinesse'
        },
    ]
    return (
        <View>
            <Text style={{ color: 'black', fontSize: 20, margin: 7 }}>What's on your mind</Text>
            <FlatList horizontal={true}
                data={list}
                renderItem={({ item }) => (
                    <View>
                        <Image style={styles.image} source={item.imageuri} />
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                )} />
        </View>
    )
}

export default ItemComponent

const styles = StyleSheet.create({
    image:{
        width:80,
        height:80,
        borderRadius:40,
        margin:5,
        borderWidth:3,
        borderColor:'black'
    },
    name:{
        color:'gray',
        margin:10,
        fontSize:16,
        textAlign:'center',
        fontWeight:'600'
    }
})