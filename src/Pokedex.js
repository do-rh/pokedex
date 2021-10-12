
import React from "react";
import Pokecard from './Pokecard';

/** what does this render?? */
function Pokedex ({ pokemons, experience, isWinner }) {
    const winnerMessage = (isWinner) 
        ? <p>This hand won!!!</p> 
        : <p>This hand lost.</p>
    return (
        <div>
            <div>
                { pokemons.map(pokemon => 
                    <Pokecard 
                        name={pokemon.name} 
                        id={pokemon.id} 
                        type={pokemon.type}
                        experience={pokemon.base_experience}/
                    >) 
                }
            </div>

            <h5>Total Experience: { experience }</h5>
            { winnerMessage}
        </div>
    );
}

export default Pokedex;