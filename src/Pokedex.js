import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    
    render(){
        let title;
        if(this.props.isWinner){
            title= <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }
        return (
            <div className="Pokedex">
                <div className="fade">
                {title}
                <h4> Total Experience: {this.props.EXP} </h4>
                </div>
                <div className="Pokedex-cards">
                     {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} Name={p.Name} Type={p.Type} Experience={p.EXP} />
                    ))}
                </div>
            </div>
        )

    }
}

export default Pokedex;