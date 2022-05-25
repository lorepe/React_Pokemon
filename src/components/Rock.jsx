import { pokemonData } from "../pokemonInfo";
import Card from "./Card";

const Rock = () => {
    const {rock}=pokemonData
    
    return (
        <div>
            {rock.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Rock;