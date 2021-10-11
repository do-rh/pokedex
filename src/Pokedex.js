import Pokecard from './Pokecard';

/** what does this render?? */
function Pokedex ({pokemons}) {
    return (
        <div>
            { pokemons.map(pokemon => <Pokecard name={pokemon.name} id={pokemon.id} type={pokemon.type}/>) }
        </div>
    )
}

export default Pokedex;