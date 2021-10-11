import './Pokecard.css'

const POKEMON_IMG_BASEURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
/** */
function Pokecard({ name, id, type}) {
    return(
    <div className='Pokecard'> 
        <h3> {name} </h3>
        <img src={`${POKEMON_IMG_BASEURL}${id}.png`} alt={`${name} pic`}/>
        <p>Type: {type}</p>
    </div>
    );
}

export default Pokecard;