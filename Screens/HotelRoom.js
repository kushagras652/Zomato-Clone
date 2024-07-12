import { Pressable, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Back from 'react-native-vector-icons/AntDesign'
import BookMark from 'react-native-vector-icons/Feather'
import Share from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Entypo'
import Bike from 'react-native-vector-icons/FontAwesome'
import Clock from 'react-native-vector-icons/Ionicons'
import Scooter from 'react-native-vector-icons/Fontisto'
import menuData from '../data/menuData'
import Menu from '../component/Menu'
import { CartItems } from '../Context'

const HotelRoom = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const data=menuData;
    const {cart,setCart}=useContext(CartItems)
    console.log(cart,"cart items")
    return (
        <ScrollView >
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Back name="leftcircle" size={30} color="black" style={{ margin: 9 }} />
                </Pressable>
                <View style={{ flexDirection: 'row', left: 160 }}>
                    <Back name="camerao" size={30} color="black" style={{ margin: 9 }} />
                    <BookMark name="bookmark" size={30} color="black" style={{ margin: 9 }} />
                    <Share name="share-outline" size={30} color="black" style={{ margin: 9 }} />
                </View>
            </View>
            <View>
                <View style={{ marginTop: 6, marginStart: 6 }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{route.params.name}</Text>
                    <Text style={{ color: 'black', fontSize: 17, }}>{route.params.cusine}</Text>
                    <Text style={{ color: 'gray', fontSize: 15, }}>{route.params.address}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'green', width: '20%', borderTopRightRadius: 7, padding: 5, borderBottomRightRadius: 7, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{route.params.rating}</Text>
                        <Icons name="star" size={20} color="#fff" />
                    </View>

                    <View style={{ backgroundColor: '#e75480', width: '27%', borderTopLeftRadius: 7, padding: 5, borderBottomLeftRadius: 7, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff' }}>30+</Text>
                        <Text style={{ color: '#fff' }}>PHOTOS</Text>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginLeft:10,marginTop:5}}>
                <View style={{flexDirection:'row'}}>
                    <Bike name="motorcycle" color="black" size={28} style={{backgroundColor:'#A9A9A9',alignItems:'center',padding:4,justifyContent:'center'}}/>
                    <View style={{marginLeft:5}}>
                    <Text style={{color:'grey'}}>Mode</Text>
                    <Text style={{color:'black'}}>Delivery</Text>
                    </View>
                    
                </View>

                <View style={{flexDirection:'row'}}>
                    <Clock name="time-outline" color="black" size={28} style={{backgroundColor:'#A9A9A9',padding:4,alignItems:'center'}}/>
                    <View style={{marginLeft:5}}>
                    <Text style={{color:'grey'}}>TIME</Text>
                    <Text style={{color:'black'}}>30 Mins or Free</Text>
                    </View>
                    
                </View>

                <View style={{flexDirection:'row'}}>
                    <Share name="brightness-percent" color="blue" size={28} style={{backgroundColor:'#A9A9A9',alignItems:'center',padding:4}}/>
                    <View style={{marginLeft:5}}>
                    <Text style={{color:'grey'}}>Offers</Text>
                    <Text style={{color:'black',marginRight:5}}>View All</Text>
                    </View>
                    
                </View>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'#BEBEBE',margin:10,borderRadius:7,padding:5}}>
                <Scooter name="motorcycle" size={28} color="black"/>
                <Text style={{color:'black',fontSize:18,marginLeft:5,marginTop:2}}>₹30 additional distance fees</Text>
            </View>

            <View style={{margin:11}}>
                <Text style={{color:'black',fontSize:20}}>Full Menu</Text>
                <Text style={{borderWidth:2,height:2,borderColor:'#ff1493',width:90}}/>
                {data.map((item)=><Menu cart={cart} setCart={setCart} menu={item}/>)}
            </View>
        </ScrollView>
    )
}

export default HotelRoom

const styles = StyleSheet.create({})