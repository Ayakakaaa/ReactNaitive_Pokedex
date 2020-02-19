import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header() {
  return(
    <View style={styles.header}>
      <Text style={styles.h1}>Pokédex</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ee1515',
    alignItems: 'center',
    height: '20%',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5
  },
  h1: {
    fontSize: 40,
  }
})