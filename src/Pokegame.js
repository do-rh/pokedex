import React from "react";
import Pokedex from './Pokedex';

function sum_experience(hand) {
    let sum = 0;
    for (let pokemon of hand) {
        console.log(pokemon);
        sum += pokemon.base_experience;
    }
    return sum;
}

function Pokegame({pokemons}) {
    let pokemon_list = pokemons.slice();
    let hand1 = [];

    for (let i=0; i <= pokemon_list.length / 2; i++){
        const randomIndex = Math.floor(Math.random() * (pokemon_list.length + 1));
        const pokemon = pokemon_list[randomIndex];
        hand1.push(pokemon);
        pokemon_list = pokemon_list.filter(element => element !== pokemon);  
    }
    let hand2 = pokemon_list.slice();

    const hand1_exp = sum_experience(hand1);
    const hand2_exp = sum_experience(hand2);

    return (
        <div>
            <Pokedex pokemons={ hand1 } experience={ hand1_exp } isWinner={ hand1_exp > hand2_exp } />
            <Pokedex pokemons={ hand2 } experience={ hand2_exp } isWinner={ hand2_exp > hand1_exp } />
        </div>
    );
}

export default Pokegame;