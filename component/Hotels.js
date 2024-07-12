import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Entypo'
import Iconsw from 'react-native-vector-icons/AntDesign'
import Iconsc from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Hotels = (props) => {
    const restaurant = props.restaurant;
    const navigation=useNavigation();
  // console.log(restaurant);

    return (
        <Pressable style={styles.container} onPress={()=> navigation.navigate("HotelRoom",{
            id:restaurant.id,
            name:restaurant.name,
            address:restaurant.smalladress,
            cusine:restaurant.cuisines,
            rating:restaurant.aggregate_rating
        })}>
            <Image style={styles.image} source={{ uri: restaurant.featured_image }} />
            <View style={styles.detailsContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{restaurant.name}</Text>
                    <Text style={styles.text2}>{restaurant.cuisines}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Text style={styles.text3}>{restaurant.aggregate_rating}</Text>
                    <Icons name="star" color='#fff' size={22} />
                </View>
                <View style={{position:'absolute',right:11,bottom:90}}>
                    <View style={{flexDirection:'row',backgroundColor:'#fff',padding:3,borderRadius:6}}>
                    <Iconsc name="clockcircleo" color='green' size={21}/>
                    <Text style={{color:'black',fontSize:16,marginLeft:4}}>{restaurant.time}</Text>
                    </View>
                </View>
                <View style={{position:'absolute',left:9,bottom:80}}>
                    <View style={{flexDirection:'column',backgroundColor:'#007fff',padding:3,borderRadius:6}}>
                    {/* <Iconsc name="clockcircleo" color='green' size={21}/> */}
                    <Text style={{color:'black',fontSize:16,marginLeft:4}}>{restaurant.offer}</Text>
                    <Text>UPTO ₹40</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.horizontal]}></View>
            <View style={styles.detailsContainer}>
                <View style={styles.textContainer2}>
                    <Iconsw name="doubleright" color='#fff' size={20} style={{ backgroundColor: 'skyblue', marginRight: 5, borderRadius: 5 }} />
                    <Text style={styles.deliveryText}>{restaurant.no_of_Delivery}+ order placed here</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={{color:'black',backgroundColor:'#FFBF00',fontWeight:'bold'}}>MAX SAFETY</Text> 
                 <Text style={{color:'#fff',backgroundColor:'skyblue',fontWeight:'bold'}}>DELIVERY</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Hotels

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: '90%',
        alignSelf: 'center',
        aspectRatio: 16 / 9,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    detailsContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginTop: 5,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        color: 'black',
        fontWeight: '600',
        fontSize: 17,
    },
    text3: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 17,
        marginRight: 1,
    },
    text2: {
        color: 'grey',
        fontSize: 15,
        marginVertical: 7,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 6,
        borderRadius: 8,
    },
    horizontal: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 7,
    },
    deliveryContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 20
    },
    deliveryText: {
        // textAlign:'left',
        color: 'black',
    },
    textContainer2: {
        flex: 1,
        flexDirection: 'row'
    }
});
