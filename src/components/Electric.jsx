import { pokemonData } from "../pokemonInfo";
import Card from "./Card";
import './CardElectric.css'
const Electric = () => {
    const {electric}=pokemonData

    return (
        <div className="containerElectric">
            {electric.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Electric;