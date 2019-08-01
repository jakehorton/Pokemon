import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 1, Name: "Bulbasaur", Type: "Grass/Poison", EXP: 63},
            {id: 2, Name: "Ivysaur", Type: "Grass/Poison", EXP: 91},
            {id: 3, Name: "Venusaur", Type: "Grass/Poison", EXP: 198},
            {id: 4, Name: "Charmander", Type: "Fire", EXP: 62},
            {id: 5, Name: "Charmeleon", Type: "Fire", EXP: 90},
            {id: 6, Name: "Charizard", Type: "Fire/Flying", EXP: 200},
            {id: 7, Name: "Squirtle", Type: "Water", EXP: 60},
            {id: 8, Name: "Wartortle", Type: "Water", EXP: 95},
            {id: 9, Name: "Blastoise", Type: "Water", EXP: 199},
            {id: 24, Name: "Arbok", Type: "Poison", EXP: 150},
            {id: 59, Name: "Arcanine", Type: "Fire", EXP: 205},
            {id: 93, Name: "Haunter", Type: "Ghost/Poison", EXP: 137},
            {id: 99, Name: "Kingler", Type: "Water", EXP: 182},
            {id: 123, Name: "Scyther", Type: "Bug/Flying", EXP: 177},
            {id: 141, Name: "Kabutops", Type: "Rock/Water", EXP: 199},
            {id: 150, Name: "Mewtwo", Type: "Psychic", EXP: 250}
        ]
    };
    render(){
        let random = [ ...this.props.pokemon]
        let hand1 = [];
        let hand2 = [];
        while(hand2.length < random.length){
            let randIdx = Math.floor(Math.random()*random.length);
            let randPokemon = random.splice(randIdx, 1)[0];
            hand2.push(randPokemon);
        } 
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random()*hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        } 
        
    

        let EXP1= hand1.reduce((EXP, pokemon) => EXP + pokemon.EXP, 0);
        let EXP2= hand2.reduce((EXP, pokemon) => EXP + pokemon.EXP, 0);
        return (
            <div>
                <Pokedex pokemon={hand1} EXP={EXP1} isWinner = {EXP1>EXP2}/>
                <Pokedex pokemon={hand2} EXP={EXP2} isWinner = {EXP2>EXP1}/>
            </div>
        )
    }
}

export default Pokegame;