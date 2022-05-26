import { pokemonData } from "../pokemonInfo";
import Card from "./Card";
import './CardWater.css'
const Water = () => {
    const {water}=pokemonData

    return (
        <div className="containerWater">
            {water.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Water;

