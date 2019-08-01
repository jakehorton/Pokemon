import React, {Component} from 'react';
import './Pokecard.css'

// const POKE_API = 
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const POKE_API = 
"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padToThree = (number) => (number <=999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <li className>
            <div className="card">
            <div className="Pokecard">
                <h1 className="Pokecard-title"> {this.props.Name} </h1>
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.Name}/>
                </div>
                <div className="Pokecard-data"> Type: {this.props.Type} </div>
                <div className="Pokecard-data"> Experience: {this.props.Experience} </div>

            </div>
            <div className="back"></div>
            </div>
            </li>
        );
        
    }
}

export default Pokecard;