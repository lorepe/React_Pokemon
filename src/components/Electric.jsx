import { pokemonData } from "../pokemonInfo";
import Card from "./Card";
const Electric = () => {
    const {electric}=pokemonData

    return (
        <div>
            {electric.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Electric;