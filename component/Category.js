import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = () => {
    const items = [
        {
            id: 1,
            name: 'fastest Delivery'
        },
        {
            id: 2,
            name: 'rating 4.0+'
        },
        {
            id: 3,
            name: 'offers'
        },
        {
            id: 4,
            name: 'cusines'
        },
        {
            id: 5,
            name: 'max safety'
        },
        {
            id: 6,
            name: 'pro'
        }
    ]
    return (
        <View>
            <FlatList horizontal={true} 
                data={items}
                renderItem={({ item }) => (
                    <Pressable style={styles.pressable}>
                        <Text style={{color:'#fff'}}>{item.name}</Text>
                    </Pressable>
                )
                } />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    pressable:{
        borderRadius:7,
        padding:5,
       backgroundColor:'#E25822',
        margin:7
    }
})