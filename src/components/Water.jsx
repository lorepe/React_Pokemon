import { pokemonData } from "../pokemonInfo";
import Card from "./Card";
const Water = () => {
    const {water}=pokemonData

    return (
        <div>
            {water.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Water;

