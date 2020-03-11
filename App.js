import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native'; // React Native API Reference -> https://facebook.github.io/react-native/docs/activityindicator
import { Home, PokemonDetails } from './components';

const POKEMON_API_ENDPOINT = "https://pokeapi.co/api/v2/"
const GET_50_POKEMON_PATH = "pokemon?limit=50"

const Stack = createStackNavigator();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetch(`${POKEMON_API_ENDPOINT}${GET_50_POKEMON_PATH}`)
      .then(res => {
        // cant console.log(res)... ill need to look into that
        // res.json();
        console.log("getting pokemon list")
        return res.json()
      })
      .then(payload => {
        setPokemonList(payload.results)
      })
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={({navigation}) => <Home pokemonList={pokemonList} navigation={navigation}/>}
          options={{title: 'Pokédex'}}
        />
        <Stack.Screen
          name="Pokemon Details"
          component={({navigation, route}) => <PokemonDetails pokemon={route.params.pokemon} />}
          // component={({navigation}) => <Home pokemonList={pokemonList} navigation={navigation}/>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

