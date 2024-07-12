import { Image, Pressable, StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.jpg'
import img3 from '../assests/img3.jpg'

const FirstImage = () => {

  const data=[
    {
      id:1,
      imageuri:img2
    },
    {
      id:2,
      imageuri:img3
    },
    {
      id:3,
      imageuri:img1
    }
  ]
  return (
    <View >
     {/* <Pressable> */}
      <FlatList horizontal={true}
      data={data}
      renderItem={({item})=>
      <View>
        <Image style={styles.image} source={item.imageuri}/>
      </View>
      }/>
     {/* </Pressable> */}
    </View>
  )
}

export default FirstImage

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  image: {
    width: 160,
    height: 125,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth:2,
    borderColor:'red',
    margin: 8
  }
})