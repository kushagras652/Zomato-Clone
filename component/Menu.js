import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Heart from 'react-native-vector-icons/AntDesign'
import Share from 'react-native-vector-icons/MaterialCommunityIcons'

const Menu = ({menu,cart,setCart}) => {
    const bestSeller = true;
    const [addItem, setAddItem] = useState(0);
  //  console.log(cart,"cart Items")
  console.log(cart.length,"no of items in cart")

    const increase= ()=> {
        setCart([...cart,Menu])
       setAddItem(addItem+1)
    }

    const decrease= ()=>{
        setCart(cart.filter((p)=>p.id != menu.id))
        setAddItem(Math.max(0,addItem-1));
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 13,marginRight:2 }}>
               
                    <View>
                        <Text style={{ fontWeight:'bold',color:'black',fontSize:16}}>{menu.name}</Text>
                        <Text style={{ color: 'black', fontWeight:'400' }}>{menu.price}</Text>
                        <Text style={{ color: 'red' ,backgroundColor:'#F8C8DC',width:70,textAlign:'center',marginTop:3}}>
                            {(bestSeller && menu.bestSeller || menu.mustTry)}
                        </Text>
                        <View style={{ marginLeft: 16, flexDirection: 'row', marginTop: 4 }}>
                            <Heart name="hearto" size={26} color='#ff726f' style={{ borderColor: 'grey', borderWidth: 1, padding: 5, borderRadius: 20 }} />
                            <Share name="share-outline" size={26} color='#ff726f' style={{ borderColor: 'grey', borderWidth: 1, padding: 5, borderRadius: 20, marginLeft: 6 }} />
                        </View>

                    </View>
             
                <View >
                    <Image source={{ uri: menu.image }} style={{ width: 140, height: 140, borderRadius: 10 }} />
                    <Pressable style={{ flexDirection: 'row', backgroundColor: '#ff3366', position: 'absolute', right: 18, top: 113, borderRadius: 10 }}>
                        <Pressable onPress={increase}>
                            <Text style={{ fontSize: 25, paddingHorizontal: 10, fontWeight: 'bold', color: 'white' }}>+</Text>
                        </Pressable>

                        <Pressable>
                            <Text style={{ fontSize: 25, paddingHorizontal: 10, fontWeight: 'bold', color: 'white' }}>{addItem}</Text>
                        </Pressable>

                        <Pressable onPress={decrease}>
                            <Text style={{ fontSize: 25, paddingHorizontal: 10, fontWeight: 'bold', color: 'white' }}>-</Text>
                        </Pressable>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})