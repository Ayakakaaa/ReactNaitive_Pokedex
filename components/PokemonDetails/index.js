import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Header } from '../';


export default function PokemonDetails({pokemon: pokemonDetails}) {
    const [pokemon, setPokemon] = useState(pokemonDetails);
    useEffect(() => {
    fetch(pokemonDetails.url)
      .then(res => {
        // cant console.log(res)... ill need to look into that
        // res.json();
        return res.json()
      })
      .then(payload => {
        console.log("getting pokemon");
        console.log(payload);
        setPokemon(payload);
      })
  }, [])
    // let fullPokemon;
    console.log('pokemon details');
    console.log(useState().pokemon);
    console.log(pokemon)
    // fetch(pokemon.url)
    //     .then(res => res.json() )
    //     .then(pokeData => {
    //     // console.log(`${pokemon.name} has ${pokemon.abilities.length} abilities`);
    //     pokemon = pokeData;
    //     })
    return(
        <View style={styles.details}>
            <Header />
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.info}>height: {pokemon.height}</Text>
            <Text style={styles.info}>weight: {pokemon.weight}</Text>
    <Text style={styles.info}>{pokemon.name} has {pokemon.abilities?.length} abilities</Text>
            <ImageBackground source={{uri: pokemon.sprites?.front_default}} style={styles.pic}>
            </ImageBackground>
        </View>
    )
  }


const styles = StyleSheet.create({
    details: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      flexDirection: 'column',
    },
    info: {
        color: 'white',
        fontSize: 20
    },
    name: {
        fontSize: 30,
        margin: 30,
        fontWeight:'bold',
        textShadowColor: 'white',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 10 
    },
    pic: {
        margin: 30,
        width: 120, 
        height: 120
    }
  });


