import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Header() {
  return(
    <ImageBackground source={{uri: 'https://specials-images.forbesimg.com/imageserve/5db40f3aa210800006f07b59/960x0.jpg?cropX1=0&cropX2=1280&cropY1=0&cropY2=720'}} style={styles.header}>
      <Text style={styles.h1}>Pokédex</Text>
    </ImageBackground>
    // <View style={styles.header}>
    // </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#ee1515',
    alignItems: 'center',
    // height: '20%',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    width: '100%', 
    minHeight: '25%'
  },
  h1: {
    fontSize: 60,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10
  }
})