import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, ScrollableList } from '../';

export default function Home({navigation, pokemonList}) {
  return(
    <View style={styles.container}>
      <Header />
      <ScrollableList items={pokemonList} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
});
