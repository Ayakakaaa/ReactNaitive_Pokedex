import React from 'react'
import {StyleSheet, ScrollView, View, Text, TouchableHighlight} from 'react-native'

export default function ScrollableList({items, navigation}) {
  return(
    <ScrollView style={styles.pokemonList}>
      {items.map(pokemon => {
        return(
          <TouchableHighlight 
            key={pokemon.name} 
            onPress={() => {
              navigation.navigate('Pokemon Details', {pokemon: pokemon})
            }}
          >
            <View  style={styles.item}>
              <Text style={styles.h2}>{pokemon.name}</Text>
            </View>
          </TouchableHighlight>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pokemonList: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'stretch'
  },
  item: {
    backgroundColor: 'pink',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 40,
    justifyContent: 'center'
  },
  h2: {
    fontSize: 20
  }
})

