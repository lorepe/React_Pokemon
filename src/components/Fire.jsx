import Card from "./Card";
import{ pokemonData} from "../pokemonInfo"

const Fire = () => {
    

    return (
        <div>
            {pokemonData.fire.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Fire;